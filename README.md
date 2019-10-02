
[![Latest Release](https://img.shields.io/github/release/softlayer/ember-cli-jsdoc.svg)](https://github.com/softlayer/ember-cli-jsdoc/releases) ![Ember CLI version](https://img.shields.io/badge/ember%20cli-2.10.0-blue.svg) [![License](https://img.shields.io/npm/l/ember-cli-jsdoc.svg)](LICENSE.md) [![Downloads](https://img.shields.io/npm/dm/ember-cli-jsdoc.svg)](https://www.npmjs.com/package/ember-cli-jsdoc)

[![Dependencies](https://img.shields.io/david/softlayer/ember-cli-jsdoc.svg)](https://david-dm.org/softlayer/ember-cli-jsdoc) [![Dev Dependencies](https://img.shields.io/david/dev/softlayer/ember-cli-jsdoc.svg)](https://david-dm.org/softlayer/ember-cli-jsdoc#info=devDependencies)


# ember-cli-jsdoc

An Ember CLI addon to generate HTML documentation from [JSDoc](http://usejsdoc.org) comments in the source code.



# Install

```sh
ember install ember-cli-jsdoc
```



# Use

Run `ember ember-cli-jsdoc` anytime you wish to generate the documentation.  You can then access this generated
documentation at *http://localhost:4200/docs*.



# Features

* Smartly generates `jsdoc.json` configuration file based on your application or addon's setup
    * You can make any changes to this file as needed to suit your configuration needs
* Generated documentation is accessible at *http://localhost:4200/docs*
* Customized JSDoc template to support display of custom [@observes](https://github.com/notmessenger/jsdoc-plugins#emberobservestag) tag
* Automatically populates @listens tag values through use of the [emberListensTag plugin](https://github.com/notmessenger/jsdoc-plugins#emberlistenstag)
* You do not have to employ the @default tag for non-complex types, through the use of the [defaultTag plugin](https://github.com/notmessenger/jsdoc-plugins#defaulttag)



# Things to know

* For the best experience using JSDoc comments you should follow
[this styleguide](https://github.com/softlayer/ember-style-guide#comments).
    * This is because JSDoc does not yet currently fully support ES6 syntax nor does its conventions always reflect the architecture of an Ember application.
* You may wish to add an entry in your `.gitignore` file for the `/docs` folder.
* If you are using a Node version below 5.x.x you will want to change the `plugins` entry in the *jsdoc.json* file to the following:

```
"plugins": [
    "plugins/markdown",
    "node_modules/ember-cli-jsdoc/node_modules/jsdoc-plugins/plugins/defaultTag",
    "node_modules/ember-cli-jsdoc/node_modules/jsdoc-plugins/plugins/emberListensTag",
    "node_modules/ember-cli-jsdoc/node_modules/jsdoc-plugins/plugins/emberObservesTag"
]
```



# Versioning
Employs [Semantic Versioning 2.0.0](http://semver.org/)



# Contribution
[See CONTRIBUTING.md](CONTRIBUTING.md)



# Copyright and License
ember-cli-jsdoc and its source files are Copyright © 2015-2018 [SoftLayer Technologies, Inc.](http://www.softlayer.com/)
The software is [MIT Licensed](LICENSE.md)



# Warranty
This software is provided “as is” and without any express or implied warranties, including, without limitation, the
implied warranties of merchantability and fitness for a particular purpose.
