const path = require('path');
const withTM = require('@weco/next-plugin-transpile-modules');
const withCSS = require('@zeit/next-css')

module.exports = withCSS(withTM({
    transpileModules: ["components", "react-native", "recyclerlistview"],
    cssModules: true,
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
    }}));