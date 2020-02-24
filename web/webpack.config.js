const path = require('path');
const rootDir = path.join(__dirname, '..');
const webpack = require('webpack');
const webpackEnv = process.env.NODE_ENV || 'development';
var nodeExternals = require('webpack-node-externals');

const babelLoaderConfiguration = {
    test: /\.(ts|tsx|js|jsx|web.ts|web.js|web.jsx)?$/,
    include: [
        path.resolve(__dirname, 'index.js'),
        path.resolve(rootDir, 'config.js'),
        path.resolve(rootDir, 'src'),
        path.resolve(rootDir, './node_modules/@headout/aer'),
        path.resolve(rootDir, './node_modules/react-native')
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
                '@babel/preset-typescript',
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
    test: /\.(jpe?g|png|gif)$/,
    loader: "url-loader"
};

const svgLoaderConfig =  {
    test: /\.svg$/,
    use: [
        'babel-loader',
      {
        loader: "react-svg-loader",
        options: {
          jsx: true // true outputs JSX tags
        }
      }
    ]
};

module.exports = {
    mode: webpackEnv,
    entry: path.join(__dirname, './index'),
    output: {
        path: path.resolve(rootDir, 'build'),
        filename: 'web.bundle.js',
        library: 'proteus',
        libraryTarget: 'umd',
    },
    module: {
        rules: [babelLoaderConfiguration, svgLoaderConfig, imageLoaderConfiguration],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.DEV': JSON.stringify(webpackEnv === 'development')
        }),
    ],
    externals: [
        "react",
        /^react-dom$/
    ],
    optimization: {
        usedExports: true,
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.jsx',
            '.js',
        ],
        modules: [path.resolve(rootDir, 'node_modules')],
        alias: {
            'react-native-svg$': 'react-native-web-svg',
            'node-modules': path.resolve(rootDir, "node_modules"),
            '@headout/aer': path.resolve(rootDir, "node_modules/@headout/aer/index.native.js"),
            '@headout/aer/': path.resolve(rootDir, "node_modules/@headout/aer/index.native.js")
        }
    },
};