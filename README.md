# registers-react-library

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](./LICENSE) [![Build Status](https://travis-ci.org/ONSdigital/registers-react-library.svg?branch=develop)](https://travis-ci.org/ONSdigital/registers-react-library) [![Coverage Status](https://coveralls.io/repos/github/ONSdigital/registers-react-library/badge.svg?branch=develop)](https://coveralls.io/github/ONSdigital/registers-react-library?branch=develop) [![Dependency Status](https://www.versioneye.com/user/projects/59e49c0d0fb24f213b61dc12/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/59e49c0d0fb24f213b61dc12) [![npm version](https://badge.fury.io/js/registers-react-library.svg)](https://badge.fury.io/js/registers-react-library)

React library for common components across Registers user interfaces. We have taken some of the external ONS patterns from the [ons-pattern-library-starter](http://onsdigital.github.io/ons-pattern-library-starter/) repository and wrapped them in dynamic React components.

[This](https://myappincome.co.uk/how-to-create-local-npm-package-of-react-components/) tutorial was used to help setup up the project.

## Using this Module

1. Install the module using NPM.

```shell
npm install --save registers-react-library
```

2. Import the component you want to use.

```javascript
import { Button } from 'registers-react-library';
```

3. Check the [storybook](https://onsdigital.github.io/registers-react-library) for details of what props to pass in.

## Environment Setup

Install NPM, it is included with Node.js ([Download](https://nodejs.org/en/))

## Running the Storybook

```shell
npm run storybook
```

## Deploy the Storybook to Github Pages

```shell
npm run build-storybook
npm run deploy-storybook
```

You can access the deployed Storybook [here](https://onsdigital.github.io/registers-react-library).

## Testing

To run the Enzyme tests (using Jest as a test runner), run the following command:

```shell
npm run test
```

## Linting

To run the linter, run the following command:

```shell
npm run lint
```

## Contributing

See [CONTRIBUTING](./CONTRIBUTING.md) for details.

## License

Copyright ©‎ 2017, Office for National Statistics (https://www.ons.gov.uk)

Released under MIT license, see [LICENSE](./LICENSE) for details.

