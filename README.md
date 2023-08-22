## @merokudao/storekit-sdk

This is the NodeJS Typescript SDK for API described at [https://github.com/merokudao/storekit/blob/main/apps/docs/public/api-specs/meroku-server.yml](https://github.com/merokudao/storekit/blob/main/apps/docs/public/api-specs/meroku-server.yml) and hosted at [https://docs.meroku.store](https://docs.meroku.store).

This package is generated using Swagger CodeGen. More details on that follows the usage section.

The versioning of this package is consistent with the API spec version. So if you are using OpenAPI Spec
v 1.21, then the package should be `1.21`.

**T O C**

- [Install](#install)
- [Registry Use](#registry-use)
- [Analytics](#analytics)
  * [Visit a dApp's Home Page](#visit-a-dapp-s-home-page)
  * [Download a dApp's Build](#download-a-dapp-s-build)
  * [Post a rating for dapp by user](#post-a-rating-for-dapp-by-user)
  * [Get a rating for dapp by user](#get-a-rating-for-dapp-by-user)
- [Featured Section](#featured-section)
  * [Get Featured Sections and the dapps in them.](#get-featured-sections-and-the-dapps-in-them)
  * [Get Store Title](#get-store-title)


# Install

`npm install @merokudao/storekit-sdk`

or

`yarn add @merokudao/storekit-sdk`



# Registry Use

```typescript

import {
  DAppRegistryApi,
  Dapp,
  DappAvailableOnPlatformEnum,
  StoreRegistryApi,
  DappCategoryEnum,
  DappWithDevCreds,
  DeveloperProfilesApi,
} from '@merokudao/storekit-sdk';

const baseURL = process.env.STOREKIT_API_URL as string | 'https://api.meroku.store';

// Configure the API and instantiate
const dAppRegistryAPI = new DAppRegistryApi(
  {
    basePath: baseURL
  },
  undefined,
  undefined
);

// Get the dApps list
const dApps: Dapp[] = await dAppRegistryAPI.searchDapps();
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


const basePath = process.env.STOREKIT_API_URL as string | 'https://api.meroku.store';

const dappId = "example.app";

const getViewURL = (base_path: string,
  dappId: string,
  userId: string | undefined,
  userAddress: string | undefined) => {
    if (!userId && !userAddress) {
      throw Error("One of userId or userAddress must be defined");
    }

    if (userId) {
      return `${base_path}/api/v1/o/view/${dappId}?userId=${userId}`;
    } else if (userAddress) {
      return `${base_path}/api/v1/o/view/${dappId}?userAddress=${userAddress}`;
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
      return `${base_path}/api/v1/o/download/${dappId}?userId=${userId}`;
    } else if (userAddress) {
      return `${base_path}/api/v1/o/download/${dappId}?userAddress=${userAddress}`;
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
  dappId: 'test_example.app',
  rating: 4,
  comment: 'comment from user',
  userId: 12
};
const response: DappRating = await analyticsApi.apiV1DappRatePost(body)

```

## Get a rating for dapp by user

```typescript

const dappId = 'test_example.dapp';
const userId = 2;
const userAddress = undefined;
const response: DappRating = await analyticsApi.apiV1DappRateGet(dappId, userId, userAddress);

```

# Featured Section

Initialise the API as below.

```typescript
const featuredApi = new FeaturedSectionApi({
	    basePath: baseURL
	});

```

## Get Featured Sections and the dapps in them.

```typescript
const featuredSections: Array<FeaturedSection> = await featuredApi.getFeaturedDAppsV1()
```

This should be iterated and shown on ui.

## Get Store Title

Gets the title of the registry

```typescript
const title: string = await featuredApi.getStoreTitleV1()
```

# AppStores

```typescript
  const storeApi = new StoreRegistryApi()
```

APis to interact with appStore's

## Get/Search appStore's

```typescript
const stores = await storeApi.searchStores()
```

## Search store by storeId/key

```typescript
const stores = await storeApi.searchStoresByStoreId('kailash')
```
## Get appStore's by owner address

```typescript
const stores = await storeApi.searchStoresByOwnerAddress('0xA0B867319e3fBb15181D118097b1069C6380222E')
```

## Search for Autocomplete appStore's search

```typescript
const stores = await storeApi.autocompleteStores('unstoppable')
```


# Developers

```typescript
  const developerApi = new DeveloperProfilesApi()
```

APis to interact with developer's

## Get/Search developer's

```typescript
const developers = await developerApi.searchDeveloperProfile()
```

## Search store by storeId/key

```typescript
const developers = await developerApi.searchDeveloperByDevId('kai.dev')
```
## Get developer's by owner address

```typescript
const developers = await developerApi.searchDeveloperByOwnerAddress('0xA0B867319e3fBb15181D118097b1069C6380222E')
```

## Search for Autocomplete developer's search

```typescript
const developers = await developerApi.autocompleteDeveloper('kai')
```