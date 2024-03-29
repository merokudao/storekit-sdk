/* tslint:disable */
/* eslint-disable */
/**
 * Meroku API Documentation
 * Open API specs for Meroku APIs. These APIs are required to inteact with the registry in a safe, easy way. The recommended way to use in a project is to use the npm package published at [@merokudao/storekit-sdk](https://www.npmjs.com/package/@merokudao/storekit-sdk). This npmjs package is a wrapper around the api. You would still want to use the APIs if you're building on a different platform.  # Authentication - To learn more on Authentication and the benefits of using higher rate limit, [read this Meroku.xyz blog post](https://meroku.xyz/2023/06/08/meroku-api-updates/). - To request an API key [fill this developer access form](https://form.jotform.com/231576486954067) - You can try this UI without getting any API Key as well # Learn More - [How to build a dApp Store using Meroku APIs](https://docs.meroku.org/dapp-store-kit-docs/for-dapp-store-builders#api--sdk-1) - [Meroku Blog](https://meroku.xyz) # Support - [Support Discourse Group](https://meroku.discourse.group) # Stay Connected - [Follow us on Github](https://github.com/merokudao) - [Follow us on Twitter](https://twitter.com/MerokuStore) 
 *
 * OpenAPI spec version: 1.27
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { DappDeveloper } from './dapp-developer';
import { DappEnrich } from './dapp-enrich';
import { DappGeoRestrictions } from './dapp-geo-restrictions';
import { FeaturedSection } from './featured-section';
import { StoreImages } from './store-images';
/**
 * 
 * @export
 * @interface Store
 */
export interface Store {
    /**
     * 
     * @type {FeaturedSection}
     * @memberof Store
     */
    featuredSections?: FeaturedSection;
    /**
     * Unique id of a store. it always end with .appstore
     * @type {string}
     * @memberof Store
     */
    key?: string;
    /**
     * nft id of a store. it always end with .appstore
     * @type {string}
     * @memberof Store
     */
    storeId: string;
    /**
     * name of the dApp Store.
     * @type {string}
     * @memberof Store
     */
    name: string;
    /**
     * description of the dApp Store.
     * @type {string}
     * @memberof Store
     */
    description: string;
    /**
     * List of dapp ids that are whitelisted in the store
     * @type {Array<string>}
     * @memberof Store
     */
    whitelistedDAppIds?: Array<string>;
    /**
     * List of dapp ids that are banned in the store
     * @type {Array<string>}
     * @memberof Store
     */
    bannedDAppIds?: Array<string>;
    /**
     * 
     * @type {StoreImages}
     * @memberof Store
     */
    images?: StoreImages;
    /**
     * The min age of user who should access this store
     * @type {number}
     * @memberof Store
     */
    minAge: number;
    /**
     * Boolean to signify if the store is for mature audience
     * @type {boolean}
     * @memberof Store
     */
    isForMatureAudience: boolean;
    /**
     * Boolean to signify if the dApp developers have a moderation in place for the content posted/generated by the store or it's users
     * @type {boolean}
     * @memberof Store
     */
    isSelfModerated?: boolean;
    /**
     * A string in ISO-639-1 which signifies the language of the dApp
     * @type {string}
     * @memberof Store
     */
    language: string;
    /**
     * Boolean to signify if the store is listed.
     * @type {boolean}
     * @memberof Store
     */
    isListed: boolean;
    /**
     * The date on which this store is listed. This date can be a future date as well. This can not be in past.
     * @type {string}
     * @memberof Store
     */
    listDate: string;
    /**
     * 
     * @type {DappGeoRestrictions}
     * @memberof Store
     */
    geoRestrictions?: DappGeoRestrictions;
    /**
     * 
     * @type {DappDeveloper}
     * @memberof Store
     */
    developer?: DappDeveloper;
    /**
     * The category of the store. You can assign one category to your store.
     * @type {string}
     * @memberof Store
     */
    category: StoreCategoryEnum;
    /**
     * The URL of the store from where the webview will be loaded.
     * @type {string}
     * @memberof Store
     */
    url: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Store
     */
    tags?: Array<string>;
    /**
     * 
     * @type {DappEnrich}
     * @memberof Store
     */
    dappEnrich?: DappEnrich;
}

/**
    * @export
    * @enum {string}
    */
export enum StoreCategoryEnum {
    Games = 'games,',
    Finance = 'finance,',
    Browsers = 'browsers,',
    Wallets = 'wallets,',
    NftSocial = 'nft-social,',
    Universal = 'universal,',
    Others = 'others'
}

