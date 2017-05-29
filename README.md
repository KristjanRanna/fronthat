# FrontHAT.com
[![Greenkeeper badge](https://badges.greenkeeper.io/erkarl/fronthat.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/erkarl/fronthat.svg?branch=master)](https://travis-ci.org/erkarl/fronthat)

This repository contains front end application for [fronthat.com](https://fronthat.com).

#### Overview

##### Offline First Support
* [ember-service-worker](https://github.com/DockYard/ember-service-worker) + [ember-service-worker-asset-cache](https://github.com/DockYard/ember-service-worker-asset-cache) + [ember-service-worker-index](https://github.com/DockYard/ember-service-worker-index)
* [ember-redux](https://github.com/ember-redux/ember-redux) + [ember-redux-offline](https://github.com/ember-redux/ember-redux-offline-shim)
* [https://github.com/san650/ember-web-app](https://github.com/san650/ember-web-app) to generate Web App Manifest

##### SEO optimization / support:
* [ember-cli-fastboot](https://github.com/ember-fastboot/ember-cli-fastboot) for server side rendering
* [ember-page-title](https://github.com/tim-evans/ember-page-title)
* [ember-cli-meta-tags](https://github.com/ronco/ember-cli-meta-tags)

##### Testing
* [ember-cli-mirage](http://www.ember-cli-mirage.com/) for mocking server requests during development / testing
* [ember-test-selectors](https://github.com/simplabs/ember-test-selectors)
* [ember-sinon](https://github.com/csantero/ember-sinon) + [ember-sinon-qunit](https://github.com/elwayman02/ember-sinon-qunit)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (version >= 4 with NPM)
* [Yarn](https://yarnpkg.com/en/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone git@github.com:erkarl/fronthat.git`
* `cd fronthat`
* `yarn`

## Running / Development

* `ember serve`
* [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## License

MIT
