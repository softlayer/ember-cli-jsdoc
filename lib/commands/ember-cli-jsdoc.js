'use strict';

module.exports = {
    name: 'ember-cli-jsdoc',

    run: function() {
      return require('../generate-docs')()
    }
}
