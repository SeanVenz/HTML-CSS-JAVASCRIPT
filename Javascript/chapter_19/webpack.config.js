const path = require('path');

module.exports = {
    entry: './src/sandbox.js',
    output: {
        //absolute url
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    }
};
