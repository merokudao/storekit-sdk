## @merokudao/storekit-sdk

This is the NodeJS Typescript SDK for API described at [https://github.com/merokudao/storekit/blob/main/apps/docs/public/api-specs/meroku-server.yml](https://github.com/merokudao/storekit/blob/main/apps/docs/public/api-specs/meroku-server.yml) and hosted at [https://docs-a.meroku.store](https://docs-a.meroku.store).

This package is generated using Swagger CodeGen. More details on that follows the usage section.

# Install

`npm install @merokudao/storekit-sdk`

or

`yarn add @merokudao/storekit-sdk`

# Usage

## Check Permissions

You should check if the user has installed github app or not.

**Initialize**

```typescript
import { UserPermissionsApi } from '@merokudao/storekit-sdk';

const baseURL = process.env.STOREKIT_API_URL as string | 'https://api-a.meroku.store';

// Configure the API and instantiate
const userPermissionsApi = new UserPermissionsApi(
  {
    basePath: baseURL
  },
  undefined,
  undefined
);

```

**Get the app install URL**

```typescript

const installURL = await userPermissionsApi.appInstallUrlGet();

// installURL -> { "url": "https://github.com/apps/app-name/installations/new" }
```

**Check if the user has installed app**

```typescript
const githubID = "get-this-from-logged-in-user";
const installed = await userPermissionsApi.appGhIDInstalledGet(githubID);

// installed -> { "isInstalled": true }

if (installed.isInstalled) {
  // all good
} else {
  redirect_to(installURL)
}
```

## Registry Use

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

# Analytics

There are URLs that support visit to an app's webapp or download the
build for an app. These methods should be used instead of raw linking,
because these store details about visits, downloads, installs and uninstalls.
These metrics are used to prepare trending dapps.


## Visit a dApp's Home Page


The URL to visit a dapp's home page should be constructed as below. The return
value of `getViewURL` should be shown on the UI. When user clicks on it,
they will be redirected to the dapp home page.

```typescript


const basePath = process.env.STOREKIT_API_URL as string | 'https://api-a.meroku.store';

const dappId = "dapp.example.dapp";

const getViewURL = (base_path: string,
  dappId: string,
  userId: string | undefined,
  userAddress: string | undefined) => {
    if (!userId && !userAddress) {
      throw Error("One of userId or userAddress must be defined");
    }

    if (userId) {
      return `${base_path}/o/view/${dappId}?userId=${userId}`;
    } else if (userAddress) {
      return `${base_path}/o/view/${dappId}?userAddress=${userAddress}`;
    }
}

```


## Download a dApp's Build

```typescript

const getDownloadURL = (base_path: string,
  dappId: string,
  userId: string | undefined,
  userAddress: string | undefined) => {
    if (!userId && !userAddress) {
      throw Error("One of userId or userAddress must be defined");
    }

    if (userId) {
      return `${base_path}/o/download/${dappId}?userId=${userId}`;
    } else if (userAddress) {
      return `${base_path}/o/download/${dappId}?userAddress=${userAddress}`;
    }
}

```


In the UI the return value of `getDownloadURL` should be shown. When user
clicks on it, they will be redirected to the download URL and the file will
be automatically downloaded.