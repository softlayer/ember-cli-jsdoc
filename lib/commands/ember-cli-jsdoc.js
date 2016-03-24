'use strict';

module.exports = {
    name: 'ember-cli-jsdoc',

    run: function() {
        var exec = require( 'child_process' ).exec;
        var rsvp = require( 'rsvp' );
        var path = require( 'path' );
        var chalk = require( 'chalk' );
        var cmdPath = ( Number( process.version.match( /^v(\d+)/ )[1] ) >= 5 ) ?
            path.join( 'node_modules', '.bin', 'jsdoc' ) :
            path.join( 'node_modules', 'ember-cli-jsdoc', 'node_modules', '.bin', 'jsdoc' );

        return new rsvp.Promise( function( resolve, reject ) {
            exec( cmdPath + ' -c jsdoc.json', { cwd: process.cwd() }, function( error, stdout, stderr ) {
                console.log( stderr );

                var shouldReject = false;

                if ( error ) {
                    console.log( chalk.red( 'EMBER-CLI-JSDOC: ERRORs have occurred during documentation generation' ) );
                    shouldReject = true;
                }

                if ( /WARNING/.test( stderr ) ) {
                    console.log( chalk.yellow( 'EMBER-CLI-JSDOC: WARNINGS have occurred during documentation generation' ) );
                }

                if ( shouldReject ) {
                    reject();

                } else {
                    console.log( chalk.green( 'EMBER-CLI-JSDOC: Documentation was successfully generated' ) );
                    resolve();
                }
            });
        });
    }
}
