const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "fs": false, // fs is not supported in browsers, so it's safe to set it to false
      "stream": require.resolve("stream-browserify"),
      "http": require.resolve("stream-http"),
      "net": false, // net is not supported in browsers, so it's safe to set it to false
      "url": require.resolve("url/"),
      "util": require.resolve("util/")
    }
  }
};
