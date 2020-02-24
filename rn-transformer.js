var upstreamTransformer = require("metro-react-native-babel-transformer");
var postCSSTransformer = require("react-native-postcss-transformer");
var svgTransformer = require("react-native-svg-transformer")

module.exports.transform = function ({ src, filename, options }) {
    if (filename.endsWith(".css")) {
        return postCSSTransformer.transform({ src, filename, options });
    } else if (filename.endsWith(".svg")) {
        return svgTransformer.transform({ src, filename, options })
    } else {
        return upstreamTransformer.transform({ src, filename, options });
    }
};
