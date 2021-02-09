const {
    configureWebpack,
    RootComponentsPlugin,
    graphQL: {
        getMediaURL,
        getStoreConfigData,
        getPossibleTypes,
        getUnionAndInterfaceTypes
    }
} = require('@magento/pwa-buildpack');
const webpack = require('webpack');
const { DefinePlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = async env => {
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
    // const { availableStores } = await getAvailableStoresConfigData();
    const unionAndInterfaceTypes = await getUnionAndInterfaceTypes();

    global.MAGENTO_MEDIA_BACKEND_URL = mediaUrl;
    global.LOCALE = storeConfigData.locale.replace('_', '-');
    // global.AVAILABLE_STORE_VIEWS = availableStores;

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
            test: /\.(ts|tsx|.js)?$/,
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
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-syntax-dynamic-import']
                }
            }
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
                : JSON.stringify(storeConfigData.code)
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
