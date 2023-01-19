/* tslint:disable */
/* eslint-disable */
/**
 * Meroku dApp store
 * Open API specs for Meroku DApp store. This documentation is the guide to Backend API. These APIs are required to build the frontend.  You can choose to build on top of this API or use the npm package available at [some link](https://www.example.com)  **Authentication**  The endpoints themselves are public. The CORS policy restricts browser usage beyond `*.meroku.store`. This means that you can use these APIs in your backend services, but if called directly from frontend, it has to be hosted at *.meroku.store.  The `GET` calls are public without rate limiting.  The `POST`, `UPDATE`, `DELETE` calls ensure that only the dApp developer can make changes to their own dApp listing. This is done by sending the Github (user - server) token in these API calls. The mechanism to get the Github access tokens is up to the frontend to decide. They can for example create a Github App or use a service like Auth0.  In this server, you will be able to see your github details on the top left. You can use those details to enter values in the update calls.   **FAQs**  1. I am getting a `400 Resource not accessible by integration` error on update calls. This can happen when the github token supplied does not have valid permissions. Ensure that you are not sending `org` param. Right now, the fork can only happen on individual and not at org level.   2. I am getting a `400 Not Found` error on update calls. Ensure that you are passing the correct github ID or the user who wants to make the update.
 *
 * OpenAPI spec version: 1.8
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
export interface ConfigurationParameters {
    apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    username?: string;
    password?: string;
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    basePath?: string;
    baseOptions?: any;
}

export class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    username?: string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    password?: string;
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath?: string;
    /**
     * base options for axios calls
     *
     * @type {any}
     * @memberof Configuration
     */
    baseOptions?: any;

    constructor(param: ConfigurationParameters = {}) {
        this.apiKey = param.apiKey;
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.basePath = param.basePath;
        this.baseOptions = param.baseOptions;
    }
}
