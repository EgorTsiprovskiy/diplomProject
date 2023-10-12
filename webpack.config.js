const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.js',
        balkony: './balkony.js',
        kuhni: './kuhni.js'
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true,
        static: {
            directory: './dist',
            watch: true
        }
    } 
}