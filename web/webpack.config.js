const path = require('path');
const rootDir = path.join(__dirname, '..');
const webpackEnv = process.env.NODE_ENV || 'development';
var nodeExternals = require('webpack-node-externals');

const babelLoaderConfiguration = {
    test: /\.(ts|tsx|js|jsx|web.ts|web.js|web.jsx)?$/,
    include: [
        path.resolve(__dirname, 'index.js'),
        path.resolve(rootDir, 'src'),
        path.resolve(rootDir, 'node_modules/@headout/aer'),
        path.resolve(rootDir, 'node_modules/react-native-uncompiled'),
    ],

    // Add every directory that needs to be compiled by Babel during the build.
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            babelrc: false,
            configFile: false,
            // The 'react-native' preset is recommended to match React Native's packager
            // presets: ['module:metro-react-native-babel-preset'],
            // presets: ['react-native'],
            // presets: [require.resolve('babel-preset-react-native')],
            // Re-write paths to import only the modules needed by the app
            // The configuration for compilation
            presets: [
                ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
                '@babel/preset-react',
                '@babel/preset-flow',
            ],
            plugins: [
                'react-native-web',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
            ],
            // presets: ['module:metro-react-native-babel-preset'],
            // plugins: [
            //   // needed to support async/await
            //   '@babel/plugin-transform-runtime'
            // ]
        },
    },
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
        loader: 'url-loader',
        options: {
            name: '[name].[ext]',
        },
    },
};

module.exports = {
    mode: webpackEnv,
    entry: path.join(__dirname, './index'),
    output: {
        path: path.resolve(rootDir, 'build'),
        filename: 'web.bundle.js',
        library: 'libpack',
        libraryTarget: 'umd',
    },
    module: {
        rules: [babelLoaderConfiguration, imageLoaderConfiguration],
    },
    externals: [
        /^react-dom/,
        /^react/,
    ],
    optimization: {
        usedExports: true,
    },
    resolve: {
        extensions: [
            '.web.tsx',
            '.web.ts',
            '.web.jsx',
            '.web.js',
            '.tsx',
            '.ts',
            '.jsx',
            '.js',
        ],
        alias: {
            '@headout/aer': path.resolve(rootDir, "node_modules/@headout/aer/dist/libNative.js"),
            '@headout/aer/': path.resolve(rootDir, "node_modules/@headout/aer/dist/libNative.js")
        }
    },
};