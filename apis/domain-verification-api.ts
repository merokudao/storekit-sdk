/* tslint:disable */
/* eslint-disable */
/**
 * Meroku dApp store
 * Open API specs for Meroku DApp store. This documentation is the guide to Backend API. These APIs are required to build the frontend.  You can choose to build on top of this API or use the npm package available at [some link](https://www.example.com)  # Authentication  The endpoints themselves are public. The CORS policy restricts browser usage beyond `*.meroku.store`. This means that you can use these APIs in your backend services, but if called directly from frontend, it has to be hosted at *.meroku.store.  The `GET` calls are public without rate limiting.  The `POST`, `UPDATE`, `DELETE` calls ensure that only the dApp developer can make changes to their own dApp listing. This is done by sending the Github (user - server) token in these API calls. The mechanism to get the Github access tokens is up to the frontend to decide. They can for example create a Github App or use a service like Auth0.  ## Installing Github App for automated workflow Use the [/paths/app-ghID--installed/get](/paths/app-ghID--installed/get) to check if the required github app is installed on the account. If not, then get the URL from [/paths/app-installUrl/get](/paths/app-installUrl/get) and visit the URL to install the app.  In this server, you will be able to see your github details on the top left. You can use those details to enter values in the update calls.   # FAQs  1. I am getting a `400 Resource not accessible by integration` error on update calls. This can happen when the github token supplied does not have valid permissions. Ensure that you are not sending `org` param. Right now, the fork can only happen on individual and not at org level.   2. I am getting a `400 Not Found` error on update calls. Ensure that you are passing the correct github ID or the user who wants to make the update.  3. I am getting `400 Bad Credentials`. This can happen when the github token supplied is invalid. Ensure that you are sending the correct token. If the token is correct, then try signing out and signing in.
 *
 * OpenAPI spec version: 1.11
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
import { DappGetVerificationId } from '../models';
import { DappVerify } from '../models';
import { DomainverificationGetVerificationIdBody } from '../models';
import { DomainverificationVerifyBody } from '../models';
/**
 * DomainVerificationApi - axios parameter creator
 * @export
 */
export const DomainVerificationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Use this to get a domain verification to code to verify domain ownership.
         * @summary Get a domain verification code
         * @param {DomainverificationGetVerificationIdBody} [body] Send the request with githubId and domain.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        domainverificationGetVerificationIdPost: async (body?: DomainverificationGetVerificationIdBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/domainverification/getVerificationId`;
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
         * Use this to verify your domain ownership.
         * @summary Verify domain txt records.
         * @param {DomainverificationVerifyBody} [body] Send the request with githubId and domain.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        domainverificationVerifyPost: async (body?: DomainverificationVerifyBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/domainverification/verify`;
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
    }
};

/**
 * DomainVerificationApi - functional programming interface
 * @export
 */
export const DomainVerificationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Use this to get a domain verification to code to verify domain ownership.
         * @summary Get a domain verification code
         * @param {DomainverificationGetVerificationIdBody} [body] Send the request with githubId and domain.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async domainverificationGetVerificationIdPost(body?: DomainverificationGetVerificationIdBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DappGetVerificationId>>> {
            const localVarAxiosArgs = await DomainVerificationApiAxiosParamCreator(configuration).domainverificationGetVerificationIdPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Use this to verify your domain ownership.
         * @summary Verify domain txt records.
         * @param {DomainverificationVerifyBody} [body] Send the request with githubId and domain.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async domainverificationVerifyPost(body?: DomainverificationVerifyBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DappVerify>>> {
            const localVarAxiosArgs = await DomainVerificationApiAxiosParamCreator(configuration).domainverificationVerifyPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DomainVerificationApi - factory interface
 * @export
 */
export const DomainVerificationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Use this to get a domain verification to code to verify domain ownership.
         * @summary Get a domain verification code
         * @param {DomainverificationGetVerificationIdBody} [body] Send the request with githubId and domain.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async domainverificationGetVerificationIdPost(body?: DomainverificationGetVerificationIdBody, options?: AxiosRequestConfig): Promise<AxiosResponse<DappGetVerificationId>> {
            return DomainVerificationApiFp(configuration).domainverificationGetVerificationIdPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Use this to verify your domain ownership.
         * @summary Verify domain txt records.
         * @param {DomainverificationVerifyBody} [body] Send the request with githubId and domain.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async domainverificationVerifyPost(body?: DomainverificationVerifyBody, options?: AxiosRequestConfig): Promise<AxiosResponse<DappVerify>> {
            return DomainVerificationApiFp(configuration).domainverificationVerifyPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DomainVerificationApi - object-oriented interface
 * @export
 * @class DomainVerificationApi
 * @extends {BaseAPI}
 */
export class DomainVerificationApi extends BaseAPI {
    /**
     * Use this to get a domain verification to code to verify domain ownership.
     * @summary Get a domain verification code
     * @param {DomainverificationGetVerificationIdBody} [body] Send the request with githubId and domain.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainVerificationApi
     */
    public async domainverificationGetVerificationIdPost(body?: DomainverificationGetVerificationIdBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<DappGetVerificationId>> {
        return DomainVerificationApiFp(this.configuration).domainverificationGetVerificationIdPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Use this to verify your domain ownership.
     * @summary Verify domain txt records.
     * @param {DomainverificationVerifyBody} [body] Send the request with githubId and domain.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainVerificationApi
     */
    public async domainverificationVerifyPost(body?: DomainverificationVerifyBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<DappVerify>> {
        return DomainVerificationApiFp(this.configuration).domainverificationVerifyPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
