/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-cli-jsdoc',

    includedCommands: function() {
        return {
            'ember-cli-jsdoc': require( './lib/commands/ember-cli-jsdoc' )
        }
    },
    postBuild: function(){
      return require('./lib/generate-docs')()
    }
};
