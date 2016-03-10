'use strict';

module.exports = {
    name: 'ember-cli-jsdoc',

    run: function() {
        var exec = require( 'child_process' ).exec;
        var rsvp = require( 'rsvp' );
        var path = require( 'path' );
        var cmd = path.resolve( 'node_modules', 'ember-cli-jsdoc', 'node_modules', '.bin', 'jsdoc' );
        cmd = '\"' + cmd + '\"' + ' -c jsdoc.json';
        var chalk = require( 'chalk' );

        return new rsvp.Promise( function( resolve, reject ) {
            exec( cmd, function( error, stdout, stderr ) {
                console.log( stderr );

                if ( error ) {
                    console.log( chalk.red( 'AN ERROR HAS OCCURRED PREVENTING DOCUMENTATION GENERATION' ) );
                    reject();
                } else {
                    console.log( chalk.yellow( 'ONLY WARNINGS OCCURRED' ) );
                    resolve();
                }
            });
        });
    }
}
