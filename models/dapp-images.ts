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
/**
 * 
 * @export
 * @interface DappImages
 */
export interface DappImages {
    /**
     * A URL to the logo of the dApp. Should be square and 512x512 in PNG format
     * @type {Blob}
     * @memberof DappImages
     */
    logo?: Blob;
    /**
     * A URL to the banner of the dApp. Should be 1920x1080 and in PNG format
     * @type {Blob}
     * @memberof DappImages
     */
    banner?: Blob;
    /**
     * A list of URLs to the screenshots of the dApp. Should be 1284 x 2778 and in PNG format
     * @type {Array<Blob>}
     * @memberof DappImages
     */
    screenshots?: Array<Blob>;
}
