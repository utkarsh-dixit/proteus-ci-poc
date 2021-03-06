/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

var path = require('path');
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts },
    } = await getDefaultConfig();
    return {
        projectRoot: path.resolve(__dirname, './'),
        transformer: {
            getTransformOptions: async () => ({
                transform: {
                    experimentalImportSupport: false,
                    inlineRequires: false,
                },
            }),
            babelTransformerPath: require.resolve('./rn-transformer.js'),
        },
        resolver: {
            assetExts: assetExts.filter(ext => ext !== 'svg'),
            sourceExts: [...sourceExts, 'jsx', 'svg', 'css'],
        },
    };
})();
