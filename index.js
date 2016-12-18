/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-cli-jsdoc',
    included: function(app) {
      this.jsdocOptions = app.options.jsdoc || {};
    },
    includedCommands: function() {
        return {
            'ember-cli-jsdoc': require( './lib/commands/ember-cli-jsdoc' )
        }
    },
    postBuild: function(){
      if(this.jsdocOptions.generateOnBuild) {
        return require('./lib/generate-docs')(this.jsdocOptions.configFile);
      }
    }
};
