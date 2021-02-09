const plugins = [
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/plugin-syntax-jsx'],
    ['@babel/plugin-transform-react-jsx'],
    ['@babel/plugin-proposal-nullish-coalescing-operator'],
    ['babel-plugin-graphql-tag'],
    ['@babel/plugin-proposal-export-default-from'],
    ['@babel/plugin-proposal-optional-chaining'],
    ['@babel/plugin-transform-modules-commonjs'],
    ['@babel/plugin-proposal-object-rest-spread']
];

module.exports = api => {
    const config = {
        exclude: [/packages\/babel\-preset\-peregrine\//],
        presets: [
            '@magento/peregrine',
            ['@babel/preset-env', { targets: { node: 'current' } }],
            '@babel/preset-react',
            '@babel/preset-typescript'
        ],
        plugins: [
            ...plugins,
            [
                '@babel/plugin-transform-runtime',
                { helpers: true, regenerator: true, useESModules: true }
            ]
        ],
        env: {
            test: {
                sourceType: 'module',
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            modules: 'auto'
                        },
                        'jest'
                    ]
                ],
                plugins: [
                    'dynamic-import-node',
                    '@babel/plugin-transform-runtime',
                    '@babel/plugin-transform-modules-commonjs'
                ]
            }
        }
    };
    if (api.env() === 'development') {
        // Ignore everything with underscores except stories in dev mode
        config.exclude.push(/\/__(tests?|mocks|fixtures|helpers|dist)__\//);
    }
    return config;
};
