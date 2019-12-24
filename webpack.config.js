const path = require('path')

module.exports = {
    entry: './code.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, 'dist')
    },
    resolve: {
        modulesDirectories: ['node_modules']
    }
}