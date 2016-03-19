'use strict';

module.exports = {
    name: 'ember-cli-jsdoc',

    run: function() {
        var exec = require( 'child_process' ).exec;
        var rsvp = require( 'rsvp' );
        var path = require( 'path' );
        var cmdPath = path.join( 'node_modules', '.bin', 'jsdoc' );
        var chalk = require( 'chalk' );
console.log( 'VERSION: ', process.version );
        return new rsvp.Promise( function( resolve, reject ) {
            exec( cmdPath + ' -c jsdoc.json', { cwd: process.cwd() }, function( error, stdout, stderr ) {
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
