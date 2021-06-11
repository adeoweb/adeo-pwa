const config = {
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    arrowParens: 'avoid',
    bracketSpacing: true,
    proseWrap: 'always',
    printWidth: 80,
    importOrder: [
        'react',
        '@',
        '^(?=.*src)(?!.*(scss|css|png|svg)).*',
        '((./)(?!.*(scss|css|png|svg)))',
        '^(?=.*src)(?=.*(scss|css|png|svg)).*',
        '(scss|css|png|svg)'
    ],
    importOrderSeparation: true,
    experimentalBabelParserPluginsList: ['jsx', 'typescript', 'classProperties']
};

module.exports = config;
