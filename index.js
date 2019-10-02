'use strict';

module.exports = {
    name: require('./package').name,

    includedCommands: function() {
        return {
            'ember-cli-jsdoc': require( './lib/commands/ember-cli-jsdoc' )
        }
    }
};
