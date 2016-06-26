'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.argument('appName', { type: String, required: true });
    },
    writing: {
        packageJSON: function () {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'),
                {
                    packageName: _.kebabCase(this.appName)
                });
        },
        git: function () {
            this.copy('_.gitignore', '.gitignore');
        },
        html: function () {
            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPath('index.html'),
                {
                    appName: this.appName
                }
            );
        },
        assets: function () {
            this.copy('_styles.css', 'styles.css');
        },
        scripts: function () {
            this.copy('_app.js', 'app.js');
        },
        typings: function () {
            this.fs.copyTpl(
                this.templatePath('_typings.json'),
                this.destinationPath('typings.json'),
                {
                    packageName: _.kebabCase(this.appName)
                });
        }
    }
});