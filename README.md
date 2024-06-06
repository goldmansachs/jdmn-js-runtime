# JavaScript runtime for jDMN

JavaScript runtime libraries for jDMN

See https://github.com/goldmansachs/jdmn for more information on jDMN

This runtime requires node version >= 16.

jDMN runtime is available in 4 target languages, and favors consistency of versioning across targets.

## How to install

```> npm install jdmn-js-runtime@x.x.x```

## SDLC
* Check-out project
* Make changes
* Run linters (see below) and fix errors
* Build project (see below) and fix errors
* Run tests (see below) and fix errors
* Make sure the test coverage is decent (e.g. around 70-75%)
* Commit changes

### How to run eslint rules

```> npm run lint```

### How to build the package with webpack

```> npm run build```
```> npm pack```

### How to run the jasmine tests

```> npm run test```

### How to publish the package

Change release in package.json, perform all the previous steps and run

```> npm publish ```

