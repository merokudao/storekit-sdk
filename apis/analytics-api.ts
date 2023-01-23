/* tslint:disable */
/* eslint-disable */
/**
 * Meroku dApp store
 * Open API specs for Meroku DApp store. This documentation is the guide to Backend API. These APIs are required to build the frontend.  You can choose to build on top of this API or use the npm package available at [some link](https://www.example.com)  **Authentication**  The endpoints themselves are public. The CORS policy restricts browser usage beyond `*.meroku.store`. This means that you can use these APIs in your backend services, but if called directly from frontend, it has to be hosted at *.meroku.store.  The `GET` calls are public without rate limiting.  The `POST`, `UPDATE`, `DELETE` calls ensure that only the dApp developer can make changes to their own dApp listing. This is done by sending the Github (user - server) token in these API calls. The mechanism to get the Github access tokens is up to the frontend to decide. They can for example create a Github App or use a service like Auth0.  In this server, you will be able to see your github details on the top left. You can use those details to enter values in the update calls.   **FAQs**  1. I am getting a `400 Resource not accessible by integration` error on update calls. This can happen when the github token supplied does not have valid permissions. Ensure that you are not sending `org` param. Right now, the fork can only happen on individual and not at org level.   2. I am getting a `400 Not Found` error on update calls. Ensure that you are passing the correct github ID or the user who wants to make the update. 3. I am getting `400 Bad Credentials`. This can happen when the github token supplied is invalid. Ensure that you are sending the correct token. If the token is correct, then try signing out and signing in.
 *
 * OpenAPI spec version: 0.0.11
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { DappRating } from '../models';
/**
 * AnalyticsApi - axios parameter creator
 * @export
 */
export const AnalyticsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Use this to get a user's rating for a dapp
         * @summary Get User dApp Rating
         * @param {string} dappId 
         * @param {string} [userId] 
         * @param {string} [userAddress] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dappRateGet: async (dappId: string, userId?: string, userAddress?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'dappId' is not null or undefined
            if (dappId === null || dappId === undefined) {
                throw new RequiredError('dappId','Required parameter dappId was null or undefined when calling dappRateGet.');
            }
            const localVarPath = `/dapp/rate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (dappId !== undefined) {
                localVarQueryParameter['dappId'] = dappId;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (userAddress !== undefined) {
                localVarQueryParameter['userAddress'] = userAddress;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Use this to register a rating from a user for a dApp
         * @summary Rate the dApp
         * @param {DappRating} [body] Send the request with dApp parameters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dappRatePost: async (body?: DappRating, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/dapp/rate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Download dapp Build
         * @param {string} dappId The dappId of dapp where to visit.
         * @param {string} [userId] 
         * @param {string} [userAddress] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadDapp: async (dappId: string, userId?: string, userAddress?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'dappId' is not null or undefined
            if (dappId === null || dappId === undefined) {
                throw new RequiredError('dappId','Required parameter dappId was null or undefined when calling downloadDapp.');
            }
            const localVarPath = `/o/download/{dappId}`
                .replace(`{${"dappId"}}`, encodeURIComponent(String(dappId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (userAddress !== undefined) {
                localVarQueryParameter['userAddress'] = userAddress;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Visit dapp's homepage
         * @param {string} dappId The dappId of dapp where to visit.
         * @param {string} [userId] 
         * @param {string} [userAddress] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        visitDapp: async (dappId: string, userId?: string, userAddress?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'dappId' is not null or undefined
            if (dappId === null || dappId === undefined) {
                throw new RequiredError('dappId','Required parameter dappId was null or undefined when calling visitDapp.');
            }
            const localVarPath = `/o/view/{dappId}`
                .replace(`{${"dappId"}}`, encodeURIComponent(String(dappId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (userAddress !== undefined) {
                localVarQueryParameter['userAddress'] = userAddress;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AnalyticsApi - functional programming interface
 * @export
 */
export const AnalyticsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Use this to get a user's rating for a dapp
         * @summary Get User dApp Rating
         * @param {string} dappId 
         * @param {string} [userId] 
         * @param {string} [userAddress] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dappRateGet(dappId: string, userId?: string, userAddress?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DappRating>>> {
            const localVarAxiosArgs = await AnalyticsApiAxiosParamCreator(configuration).dappRateGet(dappId, userId, userAddress, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Use this to register a rating from a user for a dApp
         * @summary Rate the dApp
         * @param {DappRating} [body] Send the request with dApp parameters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dappRatePost(body?: DappRating, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DappRating>>> {
            const localVarAxiosArgs = await AnalyticsApiAxiosParamCreator(configuration).dappRatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Download dapp Build
         * @param {string} dappId The dappId of dapp where to visit.
         * @param {string} [userId] 
         * @param {string} [userAddress] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadDapp(dappId: string, userId?: string, userAddress?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await AnalyticsApiAxiosParamCreator(configuration).downloadDapp(dappId, userId, userAddress, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Visit dapp's homepage
         * @param {string} dappId The dappId of dapp where to visit.
         * @param {string} [userId] 
         * @param {string} [userAddress] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async visitDapp(dappId: string, userId?: string, userAddress?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await AnalyticsApiAxiosParamCreator(configuration).visitDapp(dappId, userId, userAddress, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AnalyticsApi - factory interface
 * @export
 */
export const AnalyticsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Use this to get a user's rating for a dapp
         * @summary Get User dApp Rating
         * @param {string} dappId 
         * @param {string} [userId] 
         * @param {string} [userAddress] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dappRateGet(dappId: string, userId?: string, userAddress?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<DappRating>> {
            return AnalyticsApiFp(configuration).dappRateGet(dappId, userId, userAddress, options).then((request) => request(axios, basePath));
        },
        /**
         * Use this to register a rating from a user for a dApp
         * @summary Rate the dApp
         * @param {DappRating} [body] Send the request with dApp parameters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dappRatePost(body?: DappRating, options?: AxiosRequestConfig): Promise<AxiosResponse<DappRating>> {
            return AnalyticsApiFp(configuration).dappRatePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Download dapp Build
         * @param {string} dappId The dappId of dapp where to visit.
         * @param {string} [userId] 
         * @param {string} [userAddress] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadDapp(dappId: string, userId?: string, userAddress?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return AnalyticsApiFp(configuration).downloadDapp(dappId, userId, userAddress, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Visit dapp's homepage
         * @param {string} dappId The dappId of dapp where to visit.
         * @param {string} [userId] 
         * @param {string} [userAddress] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async visitDapp(dappId: string, userId?: string, userAddress?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return AnalyticsApiFp(configuration).visitDapp(dappId, userId, userAddress, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AnalyticsApi - object-oriented interface
 * @export
 * @class AnalyticsApi
 * @extends {BaseAPI}
 */
export class AnalyticsApi extends BaseAPI {
    /**
     * Use this to get a user's rating for a dapp
     * @summary Get User dApp Rating
     * @param {string} dappId 
     * @param {string} [userId] 
     * @param {string} [userAddress] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApi
     */
    public async dappRateGet(dappId: string, userId?: string, userAddress?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<DappRating>> {
        return AnalyticsApiFp(this.configuration).dappRateGet(dappId, userId, userAddress, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Use this to register a rating from a user for a dApp
     * @summary Rate the dApp
     * @param {DappRating} [body] Send the request with dApp parameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApi
     */
    public async dappRatePost(body?: DappRating, options?: AxiosRequestConfig) : Promise<AxiosResponse<DappRating>> {
        return AnalyticsApiFp(this.configuration).dappRatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Download dapp Build
     * @param {string} dappId The dappId of dapp where to visit.
     * @param {string} [userId] 
     * @param {string} [userAddress] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApi
     */
    public async downloadDapp(dappId: string, userId?: string, userAddress?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return AnalyticsApiFp(this.configuration).downloadDapp(dappId, userId, userAddress, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Visit dapp's homepage
     * @param {string} dappId The dappId of dapp where to visit.
     * @param {string} [userId] 
     * @param {string} [userAddress] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApi
     */
    public async visitDapp(dappId: string, userId?: string, userAddress?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return AnalyticsApiFp(this.configuration).visitDapp(dappId, userId, userAddress, options).then((request) => request(this.axios, this.basePath));
    }
}
