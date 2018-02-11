# Repository Release Instructions

This document captures the steps a project maintainer should follow when releasing a new version of this project.

* Merge all desired pull requests into `master` branch
* Run these commands:
    * `npm version x.x.x`, where *x.x.x* is the Semantic Version of the changeset
    * Add entries to _CHANGELOG.MD_ file and commit them
    * `git push origin master`
    * `git push origin --tags`
    * `npm publish --registry http://registry.npmjs.org/`
        * Note: `--registry` flag is workaround for occasional issues with default SSL url
