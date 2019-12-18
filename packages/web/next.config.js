const path = require('path');
const withTM = require('@weco/next-plugin-transpile-modules');

module.exports = withTM({
    transpileModules: ["components", "react-native", "recyclerlistview"],
    webpack: (config, {defaultLoaders}) => {
        config.resolve = {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                'react-native': require.resolve('react-native-web'),
                'react-native-svg$': require.resolve('react-native-web-svg'),
            },
            modules: [
                ...config.resolve.modules,
                path.resolve(__dirname, "node_modules")
            ],
            symlinks: false
        }
        config.module.rules.push({
            test: /\.+(js|jsx|ts|tsx)$/,
            use: defaultLoaders.babel,
            include: [path.resolve(__dirname, '..', 'components')]
        })
        return config;
    }});