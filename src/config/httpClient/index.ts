import AxiosApiClient from '_config/httpClient/_AxiosApiClient.ts';

import initHttpClient from './_initHttpClient.ts';

const httpClient = initHttpClient(AxiosApiClient);

export default httpClient;
