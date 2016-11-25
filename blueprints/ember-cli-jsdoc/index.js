module.exports = {
    normalizeEntityName: function() {},

    afterInstall: function() {

        /**
         * Determine whether provided path exists on disk
         *
         * @function
         * @param {String} path
         * @returns {Boolean}
         */
        function doesExist( path ) {
            try {
                fs.statSync( path );
                return true;
            } catch( err ) {
                return !( err && 'ENOENT' === err.code );
            }
        }

        /**
         * Determine which pathing array to reference during configuration creation
         *
         * @function
         * @param {String} which
         * @param {Boolean} isAddon
         * @returns {Array}
         */
        function getPaths( which, isAddon ) {
            if ( 'include' === which ) {
                return isAddon ? addonInclude : appInclude;
            }

            if ( 'exclude' === which ) {
                return isAddon ? addonExclude : appExclude;
            }
        }

        /**
         * Chalk library
         *
         * @type {Object}
         */
        var chalk = require( 'chalk' );

        /**
         * fs library
         *
         * @type {Object}
         */
        var fs = require( 'fs' );

        /**
         * Package info
         *
         * @type {Object}
         */
        var pkginfo = this.project.pkg;

        /**
         * Base JSDoc configuration
         *
         * Supplemented by additional logic
         *
         * @type {Object}
         */
        var config = {
            'tags': {
                'allowUnknownTags': true,
                'dictionaries': [
                    'jsdoc'
                ]
            },
            'source': {
                'include': [],
                'includePattern': '.+\\.js(doc)?$',
                'exclude': [],
                'excludePattern': '(^|\\/|\\\\)_'
            },
            'plugins': [
                'plugins/markdown',
                'node_modules/jsdoc-plugins/plugins/defaultTag',
                'node_modules/jsdoc-plugins/plugins/emberListensTag',
                'node_modules/jsdoc-plugins/plugins/emberObservesTag'
            ],
            'templates': {
                'cleverLinks': false,
                'monospaceLinks': false
            },
            'opts': {
                'encoding': 'utf8',
                'template': 'node_modules/ember-cli-jsdoc/jsdocTemplates/default',
                'destination': 'docs',
                'recurse': true,
                'access': 'all'
            }
        };

        /**
         * Include paths for an Ember App
         *
         * @type {Array}
         */
        var appInclude = [
            'app',
            'lib',
            'tests/helpers'
        ];

        /**
         * Exclude paths for an Ember App
         *
         * @type {Array}
         */
        var appExclude = [
            'app/styles',
            'app/templates',
            'app/mirage'
        ];

        /**
         * Include paths for an Ember Addon
         *
         * @type {Array}
         */
        var addonInclude = [
            'app',
            'addon',
            'blueprints'
        ];

        /**
         * Exclude paths for an Ember Addon
         *
         * @type {Array}
         */
        var addonExclude = [
            'addon/templates',
            'app/styles',
            'app/templates'
        ];

        /**
         * Whether the codebase this addon is being installed into is an Ember App or Addon
         *
         * @type {Boolean}
         */
        var isAddon = ( pkginfo.keywords && pkginfo.keywords.indexOf( 'ember-addon' ) !== -1 ) ? true : false;

        // Include configuration
        getPaths( 'include', isAddon ).forEach( function( entry ) {
            if ( doesExist( entry ) ) {
                config.source.include.push( entry );
            }
        });

        // Exclude configuration
        getPaths( 'exclude', isAddon ).forEach( function( entry ) {
            if ( doesExist( entry ) ) {
                config.source.exclude.push( entry );
            }
        });

        // Configuration for README.md
        if ( doesExist( 'README.md' ) ) {
            config.opts.readme = 'README.md';
        }

        // Write JSDoc config file
        fs.writeFileSync(
            'jsdoc.json',
            JSON.stringify(
                config,
                null,
                2
            )
        );

        // Display status message
        this.ui.writeLine(
            chalk.green(
                'Generated jsdoc.json for',
                isAddon ? 'ember-addon' : 'app',
                'named ' + pkginfo.name
            )
        );

        // NPM dependency
        return this.addPackagesToProject([
            { name: 'chalk', target: '1.0.0' },
            { name: 'ember-cli-doc-server', target: '1.1.0' },
            { name: 'jsdoc', target: '3.4.0' },
            { name: 'jsdoc-plugins', target: '1.2.2' },
            { name: 'rsvp', target: '3.0.18' }
        ]);

    }
};
