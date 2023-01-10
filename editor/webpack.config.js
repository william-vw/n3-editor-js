const path = require('path');

// - N3

// -- script
module.exports = {
  // exclude node.js-only modules
  // node: { module: "empty", net: "empty", fs: "empty" }, // older versions of webpack
  resolve: { fallback: { fs: false } }, // webpack v5

  entry: './parser/turtlestar/index.js',
  output: {
    filename: 'turtlestarMain.js',
    libraryTarget: 'var',
    library: 'turtlestar',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true
  }
};

// -- requires
// module.exports = {
//   // exclude node.js-only modules
//   // node: { module: "empty", net: "empty", fs: "empty" }, // older versions of webpack
//   resolve: { fallback: { fs: false } }, // webpack v5

//   entry: './parser/n3/index.js',
//   output: {
//     filename: 'n3Main_umd.js',
//     path: path.resolve(__dirname, 'dist'),
//     globalObject: 'this',
//     library: {
//       name: 'n3Main',
//       type: 'umd',
//     },
//   },
//   optimization: {
//     minimize: false
//   }
// };

// - TurtleStar

/*module.exports = {
  node: { module: "empty", net: "empty", fs: "empty" },
  entry: './parser/turtlestar/index.js',
  output: {
    filename: 'turtlestarMain.js',
    libraryTarget: 'var',
    library: 'turtlestar',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: false
  }
};*/