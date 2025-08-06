const path = require('path');

// - N3

// -- script

// (default n3)
// module.exports = {
//   // exclude node.js-only modules
//   // node: { module: "empty", net: "empty", fs: "empty" }, // older versions of webpack
//   resolve: { fallback: { fs: false } }, // webpack v5

//   entry: './parser/n3/index.js',
//   output: {
//     filename: 'n3Main.js',
//     libraryTarget: 'var',
//     library: 'n3',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   optimization: {
//     minimize: true
//   }
// };

// (n3_nodrop)
module.exports = {
  // exclude node.js-only modules
  // node: { module: "empty", net: "empty", fs: "empty" }, // older versions of webpack
  resolve: { fallback: { fs: false } }, // webpack v5

  entry: './parser/n3_nodrop/index.js',
  output: {
    filename: 'n3_nodropMain.js',
    libraryTarget: 'var',
    library: 'n3',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true
  }
};


// -- requires
<<<<<<< HEAD
// (for use by VSCode extension)
=======

// (default n3)
>>>>>>> pqn
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

// (n3_nodrop)
// module.exports = {
//   // exclude node.js-only modules
//   // node: { module: "empty", net: "empty", fs: "empty" }, // older versions of webpack
//   resolve: { fallback: { fs: false } }, // webpack v5

//   entry: './parser/n3_nodrop/index.js',
//   output: {
//     filename: 'n3Main_nodrop_umd.js',
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