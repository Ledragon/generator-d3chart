'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    writing: {
        packageJSON: function () {
            this.copy('_package.json', 'package.json');
        },
        git: function () {
            this.copy('_.gitignore', '.gitignore');

        },
        html: function () {
            this.copy('_index.html', 'index.html');
        },
        assets: function () {
            // var source = this.templatePath('_styles.css');
            // var destination = this.destinationPath('styles.css');
            this.copy('_styles.css', 'styles.css');
        }
    }
});