## @merokudao/storekit-sdk

This is the NodeJS Typescript SDK for API described at [https://github.com/merokudao/storekit/blob/main/apps/docs/public/api-specs/meroku-server.yml](https://github.com/merokudao/storekit/blob/main/apps/docs/public/api-specs/meroku-server.yml) and hosted at [https://docs-a.meroku.store](https://docs-a.meroku.store).

This package is generated using Swagger CodeGen. More details on that follows the usage section.

# Install

`npm install @merokudao/storekit-sdk`

or

`yarn add @merokudao/storekit-sdk`

# Usage

```typescript

import {
  DAppRegistryApi,
  Dapp,
  DappAvailableOnPlatformEnum,
  StoreRegistryApi,
  DappCategoryEnum,
  DappWithDevCreds
} from '@merokudao/storekit-sdk';

const baseURL = process.env.STOREKIT_API_URL as string | 'https://api-a.meroku.store';

// Configure the API and instantiate
const dAppRegistryAPI = new DAppRegistryApi(
  {
    basePath: baseURL
  },
  undefined,
  undefined
);

// Get the dApps list
const dApps: Dapp[] = await dAppRegistryAPI.getDApp();

// Search for dApps using a search string
const dApps: Dapp[] = await dAppRegistryAPI.getDApp("nft marketplace");

// Optionally provide filters for search
const dApps: Dapp[] = await dAppRegistryAPI.getDApp("nft marketplace", chainId: 137);

// Add a dApp to registry
const dev: DappDeveloper = {
  legalName: 'John Doe & Sons',
  logo: 'https://www.example.com/some-image.png',
  website: 'https://www.example.com',
  privacyPolicyUrl: 'https://www.example.com/privacy',
  support: {
    url: 'https://www.example.com/support'
  },
  githubID: 'github-id-of-dev'
};

const dApp: Dapp = {
  name: 'Coolest NFT Maker Place',
  description: 'A really cool NFT Maker site that you will love.',
  dappId: 'example.merokudao.dapp',
  minAge: 18,
  isMatureForAudience: false,
  isSelfModerated: true,
  language: 'en',
  version: '0.0.1',
  isListed: true,
  listDate: (new Date()).toISOString(),
  availableOnPlatform: DappAvailableOnPlatformEnum.Web,
  developer: dev,
  tags: ['nft-maker', 'polygon'],
  chains: [1],
  category: DappCategoryEnum.SocialNetworking
};

const name = 'github-dev-name';
const email = 'github-dev-email';
const token = 'github-jwt-access-token';
const githubID = 'github-id-of-dev';

const reqBody: DappWithDevCreds = {
  name: name,
  email: email,
  accessToken: token,
  githubID: githubID,
  dapp: dApp
};

const prURL = await dAppRegistryAPI.addDApp(reqBody);

// prURL contains a URL which will lead to creation of PR. The user should be shown this URL on UI
// and asked to click it.


// Update dApp also has similar req body. So if you want to update the name
reqBody.dapp.name = 'new Name';
const prURL = await dAppRegistryAPI.updateDApp(reqBody);

// Delete dApp has a diff req body
reqBodyDel: DappIdWithDevCreds = {
  name: name,
  email: email,
  accessToken: token,
  githubID: githubID,
  dappId: '.dapp ID to delete'
};
const prURL = await dAppRegistryAPI.deleteDApp(reqBodyDel)

```

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @ --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
