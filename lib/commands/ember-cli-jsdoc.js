'use strict';

var exec = require( 'child_process' ).exec;
var execSync = require( 'child_process' ).execSync;
var rsvp = require( 'rsvp' );
var path = require( 'path' );
var chalk = require( 'chalk' );
var nodeBinPath = execSync( 'npm bin' );

module.exports = {
    name: 'ember-cli-jsdoc',

    run: function() {
        var cmdPath = ( Number( process.version.match( /^v(\d+)/ )[1] ) === 3 ) ?
            path.join( 'node_modules', 'ember-cli-jsdoc', 'node_modules', '.bin', 'jsdoc' ) :
            path.join( nodeBinPath.toString('utf8').trim(), 'jsdoc' );

        return new rsvp.Promise( function( resolve, reject ) {
            exec( cmdPath + ' -c jsdoc.json', { cwd: process.cwd() }, function( error, stdout, stderr ) {
                // eslint-disable-next-line no-console
                console.log( stderr );

                var shouldReject = false;

                if ( error ) {
                    // eslint-disable-next-line no-console
                    console.log( chalk.red( 'EMBER-CLI-JSDOC: ERRORS have occurred during documentation generation' ) );
                    shouldReject = true;
                }

                if ( /WARNING/.test( stderr ) ) {
                    // eslint-disable-next-line no-console
                    console.log( chalk.yellow( 'EMBER-CLI-JSDOC: WARNINGS have occurred during documentation generation' ) );
                }

                if ( shouldReject ) {
                    reject();

                } else {
                    // eslint-disable-next-line no-console
                    console.log( chalk.green( 'EMBER-CLI-JSDOC: Documentation was successfully generated' ) );
                    resolve();
                }
            });
        });
    }
}
