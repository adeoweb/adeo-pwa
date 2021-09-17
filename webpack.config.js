const {
    configureWebpack,
    RootComponentsPlugin,
    graphQL: {
        getMediaURL,
        getStoreConfigData,
        getPossibleTypes,
        getUnionAndInterfaceTypes
    },
    Utilities: { loadEnvironment }
} = require('@magento/pwa-buildpack');
const webpack = require('webpack');
const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = async env => {
    const projectConfig = await loadEnvironment(path.resolve(__dirname));

    /**
     * configureWebpack() returns a regular Webpack configuration object.
     * You can customize the build by mutating the object here, as in
     * this example. Since it's a regular Webpack configuration, the object
     * supports the `module.noParse` option in Webpack, documented here:
     * https://webpack.js.org/configuration/module/#modulenoparse
     */
    const config = await configureWebpack({
        context: __dirname,
        vendor: [
            '@apollo/client',
            'apollo-cache-inmemory',
            'apollo-cache-persist',
            'apollo-link-context',
            'apollo-link-http',
            'informed',
            'react',
            'react-dom',
            'react-feather',
            'react-redux',
            'react-router-dom',
            'redux',
            'redux-actions',
            'redux-thunk',
            'react-bootstrap'
        ],
        special: {
            'react-feather': {
                esModules: true
            }
        },
        entry: ['@babel/polyfill', './src/index.js'],
        env
    });

    const mediaUrl = await getMediaURL();
    const storeConfigData = await getStoreConfigData();
    const unionAndInterfaceTypes = await getUnionAndInterfaceTypes();

    /* Backend does not have `availableStores` query.
     * However, AVAILABLE_STORE_VIEWS should be defined as a global variable, as it's a dependency on PWA 10.
     * TODO: When APWA backend upgrades to Magento 2.4, make sure it has `availableStores` query and
     * uncomment lines below.
     */
    // const { availableStores } = await getAvailableStoresConfigData();

    /**
     * Loop the available stores when there is provided STORE_VIEW_CODE
     * in the .env file, because should set the store name from the
     * given store code instead of the default one.
     */
    // const availableStore = availableStores.find(
    //     ({ code }) => code === process.env.STORE_VIEW_CODE
    // );

    // global.AVAILABLE_STORE_VIEWS = availableStores;

    const availableStores = [process.env.STORE_VIEW_CODE];

    global.MAGENTO_MEDIA_BACKEND_URL = mediaUrl;
    global.LOCALE = storeConfigData.locale.replace('_', '-');
    global.AVAILABLE_STORE_VIEWS = availableStores;

    const possibleTypes = await getPossibleTypes();

    config.module.noParse = [
        /@adobe\/adobe\-client\-data\-layer/,
        /braintree\-web\-drop\-in/
    ];

    config.devServer = {
        ...config.devServer,
        watchOptions: {
            ignored: [path.resolve(__dirname, 'node_modules')]
        }
    };

    config.module.rules = [
        ...config.module.rules,
        {
            test: /\.(ts|tsx|js|jsx)?$/,
            exclude: /node_modules/,
            sideEffects: false,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        envName: 'production',
                        rootMode: 'upward'
                    }
                }
            ]
        },

        {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            exclude: /components/
        },
        {
            include: /components/,
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        localIdentName: '[name]-[local]-[hash:base64:3]',
                        modules: true
                    }
                },
                'sass-loader'
            ]
        },
        {
            include: /node_modules\/(informed|jarallax|video-worker)/,
            test: /\.(mjs|js)$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            ]
        }
    ];

    config.resolve.extensions = [...config.resolve.extensions, '.ts', '.tsx'];

    config.optimization = {
        ...config.optimization,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                cache: true,
                sourceMap: true,
                terserOptions: {
                    ecma: 8,
                    parse: {
                        ecma: 8
                    },
                    compress: {
                        drop_console: true
                    },
                    output: {
                        ecma: 5,
                        semicolons: false
                    },
                    keep_fnames: true
                }
            })
        ]
    };

    config.plugins = [
        new EnvironmentPlugin(projectConfig.env),
        ...config.plugins,
        new DefinePlugin({
            /**
             * Make sure to add the same constants to
             * the globals object in jest.config.js.
             */
            POSSIBLE_TYPES: JSON.stringify(possibleTypes),
            UNION_AND_INTERFACE_TYPES: JSON.stringify(unionAndInterfaceTypes),
            STORE_NAME: JSON.stringify('Venia'),
            STORE_VIEW_CODE: process.env.STORE_VIEW_CODE
                ? JSON.stringify(process.env.STORE_VIEW_CODE)
                : JSON.stringify(storeConfigData.code),
            AVAILABLE_STORE_VIEWS: JSON.stringify(availableStores)
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './template.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        await new RootComponentsPlugin({
            rootComponentsDirs: ['./src/lib/RootComponents/'],
            context: __dirname
        })
    ];

    return config;
};
