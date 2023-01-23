## @merokudao/storekit-sdk

This is the NodeJS Typescript SDK for API described at [https://github.com/merokudao/storekit/blob/main/apps/docs/public/api-specs/meroku-server.yml](https://github.com/merokudao/storekit/blob/main/apps/docs/public/api-specs/meroku-server.yml) and hosted at [https://docs-a.meroku.store](https://docs-a.meroku.store).

This package is generated using Swagger CodeGen. More details on that follows the usage section.

**T O C**

- [Install](#install)
- [Check Permissions](#check-permissions)
  * [Initialize](#initialize)
  * [Get the app install URL](#get-the-app-install-url)
  * [Check if the user has installed app](#check-if-the-user-has-installed-app)
- [Registry Use](#registry-use)
- [Analytics](#analytics)
  * [Visit a dApp's Home Page](#visit-a-dapp-s-home-page)
  * [Download a dApp's Build](#download-a-dapp-s-build)
  * [Post a rating for dapp by user](#post-a-rating-for-dapp-by-user)
  * [Get a rating for dapp by user](#get-a-rating-for-dapp-by-user)
- [Featured Section](#featured-section)
  * [Add a featured section](#add-a-featured-section)
  * [Delete a featured section](#delete-a-featured-section)
  * [Get Featured Sections and the dapps in them.](#get-featured-sections-and-the-dapps-in-them)
  * [Get Store Title](#get-store-title)
  * [Toggle dapps in a featured section.](#toggle-dapps-in-a-featured-section)

# Install

`npm install @merokudao/storekit-sdk`

or

`yarn add @merokudao/storekit-sdk`


# Check Permissions

You should check if the user has installed github app or not.

## Initialize

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

## Get the app install URL

```typescript

const installURL = await userPermissionsApi.appInstallUrlGet();

// installURL -> { "url": "https://github.com/apps/app-name/installations/new" }
```

## Check if the user has installed app

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

# Registry Use

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

Getting a dapp will always send it's global metrics.


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

AnalyticsApi.new()

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


## Post a rating for dapp by user


```typescript

const analyticsApi = new AnalyticsApi({
    basePath: baseURL
});

const body: DappRating = {
  dappId: 'test.example.dapp',
  rating: 4,
  comment: 'comment from user',
  userId: 12
};
const response: DappRating = await analyticsApi.dappRatePost(body)

```

## Get a rating for dapp by user

```typescript

const dappId = 'test.example.dapp';
const userId = 2;
const userAddress = undefined;
const response: DappRating = await analyticsApi.dappRateGet(dappId, userId, userAddress);

```

# Featured Section

Initialise the API as below.

```typescript
const featuredApi = new FeaturedSectionApi({
	    basePath: baseURL
	});

```

## Add a featured section

```typescript
const body: FeaturedSectionAddReq = {
	name: '',
	email: '',
	accessToken: '',
	githubID: '',
	sectionTitle: '' // title of the section to be added,
	description: '',
	dappIds: [
		''
	]
}
const prURL = await featuredApi.putFeaturedSection(body);
```

Once the PR is merged, a "key" of the section will be generated. This is
essentially `slugify(sectionTitle)`. In any call to update / delete the
featured section, key must be provided.	

## Delete a featured section

```typescript
const body: FeaturedSectionDelReq = {
	name: '',
	email: '',
	accessToken: '',
	githubID: '',
	sectionKey: '' // key of the section to be deleted
};
await featuredApi.deleteFeaturedSection(body);
```

## Get Featured Sections and the dapps in them.

```typescript
const featuredSections: Array<FeaturedSection> = await featuredApi.getFeaturedDApps()
```

This should be iterated and shown on ui.

## Get Store Title

Gets the title of the registry

```typescript
const title: string = await featuredApi.getStoreTitle()
```

## Toggle dapps in a featured section.

Note that this is a toggle function. If the dapps provided
by field `dappIds` does not exist in this section, they will be added.
If they exist, they will be removed.

```typescript

const body: FeaturedDAppsAddReq = {
	name: '',
	email: '',
	accessToken: '',
	githubID: '',
	sectionKey: '',
	dappIds: [
		''
	]
	
};
const prURL = await featuredApi.putFeaturedDApps(body);
```
