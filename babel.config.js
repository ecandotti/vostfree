module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
            [
                'module:react-native-dotenv',
                {
                    moduleName: '@env',
                    path: '.env.local',
                    safe: false,
                    blocklist: null,
                    allowlist: null,
                    allowUndefined: true,
                },
            ],
            [
                'module-resolver',
                {
                    root: ['./src'],
                    extensions: [
                        '.ios.js',
                        '.android.js',
                        '.ios.ts',
                        '.android.ts',
                        '.ios.tsx',
                        '.android.tsx',
                        '.js',
                        '.ts',
                        '.tsx',
                        '.json',
                    ],
                    alias: {
                        '*': '.',
                        '@root': './',
                        '@src': './src',
                        '@components': './src/components',
                        '@screens': './src/screens',
                        '@configs': './src/configs',
                        '@customTypes': './src/types',
                    },
                },
            ],
        ],
    }
}
