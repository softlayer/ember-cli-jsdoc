# ember-cli-jsdoc

An Ember CLI addon to generate HTML documentation from [JSDoc](http://usejsdoc.org) comments in the source code.



# Install in your application

```
ember install ember-cli-jsdoc
```



# Usage

Run `ember ember-cli-jsdoc` anytime you wish to generate the documentation.  You can then access this generated
documentation at *http://localhost:4200/docs*.



# Features

* Smartly generates `jsdoc.json` configuration file based on your application or addon's setup
    * You can make any changes to this file as needed to suit your configuration needs
* Generated documentation is accessible at *http://localhost:4200/docs*
* Customized JSDoc template to support display of custom [@observes](https://github.com/notmessenger/jsdoc-plugins#emberobservestag) tag
* Automatically populates @listen tag values through use of the [emberListensTag plugin](https://github.com/notmessenger/jsdoc-plugins#emberlistenstag)
* You do not have to employ the @default tag for non-complex types, through the use of the [defaultTag plugin](https://github.com/notmessenger/jsdoc-plugins#defaulttag)



# Things to know

JSDoc does not yet currently fully support ES6 syntax. Its conventions also do not always reflect the architecture of an
Ember application.  For the best experience using JSDoc comments you should follow
[this styleguide](https://github.com/notmessenger/ember-style-guide#comments).



# Versioning
Employs [Semantic Versioning 2.0.0](http://semver.org/)



# Contribution
[See CONTRIBUTING.md](CONTRIBUTING.md)



# Copyright and License
ember-cli-jsdoc and its source files are Copyright © 2015 [SoftLayer Technologies, Inc.](http://www.softlayer.com/)
The software is [MIT Licensed](LICENSE.md)



# Warranty
This software is provided “as is” and without any express or implied warranties, including, without limitation, the
implied warranties of merchantability and fitness for a particular purpose.