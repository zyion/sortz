
const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'production',
    target: 'web',
    output: {
        library: 'Sortz',
        path: path.resolve(__dirname, 'dist'),
        filename: 'sortz.js'
    }
};
