/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

var path = require('path');
const defaultSourceExts = require("metro-config/src/defaults/defaults").sourceExts;

module.exports = {
  projectRoot: path.resolve(__dirname, '../../'),
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
    babelTransformerPath: require.resolve("./rn-transformer.js"),
  },
  resolver: {
    sourceExts: [...defaultSourceExts, 'css'],
  },
};
