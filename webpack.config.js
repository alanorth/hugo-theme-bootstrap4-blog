const path = require('path');

module.exports = {
    entry: {
        fontawesome: ['./source/js/fontawesome.js'],
        bootstrap: ['./source/js/bootstrap.js']
    },
    output: {
            path: path.resolve(__dirname, 'assets/js'),
            filename: '[name].min.js'
          },
    mode: 'production'
};
