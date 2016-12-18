module.exports = function(configFile){
  var exec = require( 'child_process' ).exec;
  var rsvp = require( 'rsvp' );
  var chalk = require( 'chalk' );
  var cmdPath = require.resolve('jsdoc/jsdoc.js');
  var configFile = configFile || 'jsdoc.json'
  return new rsvp.Promise( function( resolve, reject ) {
      exec( cmdPath + ' -c '+ configFile, { cwd: process.cwd() }, function( error, stdout, stderr ) {
          console.log( stderr );

          var shouldReject = false;

          if ( error ) {
              console.log( chalk.red( 'EMBER-CLI-JSDOC: ERRORS have occurred during documentation generation' ) );
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
