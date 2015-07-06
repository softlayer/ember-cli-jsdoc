'use strict';

module.exports = {
    name: 'ember-cli-jsdoc',

    run: function() {
        var exec = require( 'child_process' ).exec;
        var rsvp = require( 'rsvp' );
        var cmd = 'node_modules/ember-cli-jsdoc/node_modules/.bin/jsdoc -c jsdoc.json';

        return new rsvp.Promise( function( resolve ) {
            exec( cmd, function( error, stdout, stderr ) {
                console.log( stderr );
                resolve();
            });
        });
    }
}