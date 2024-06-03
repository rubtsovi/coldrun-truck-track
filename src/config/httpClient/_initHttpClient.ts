import { HttpClientFactory } from '_models/httpClient.ts';

function initHttpClient(client: HttpClientFactory) {
  return new client('http://qa-api-mock-3.eu-central-1.elasticbeanstalk.com/');
}

export default initHttpClient;
