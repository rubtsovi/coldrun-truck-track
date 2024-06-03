const METHOD = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put',
} as const;

export type HttpMethod = EnumLikeValues<typeof METHOD>;

export interface RequestBaseParams {
  url: string;
  method: HttpMethod;
}

export interface ResponseObject<T> {
  response: Promise<T>;
  abortController: AbortController;
}

export interface IHttpClient {
  makeRequest<TResponse, TData>(
    baseParams: RequestBaseParams,
    data?: TData,
    options?: Record<string, unknown>
  ): ResponseObject<TResponse>;
  post<TResponse, TData>(
    url: string,
    data: TData,
    options?: Record<string, unknown>
  ): ResponseObject<TResponse>;
  get<TResponse, TParams = undefined>(
    url: string,
    params?: TParams,
    options?: Record<string, unknown>
  ): ResponseObject<TResponse>;
  delete<TResponse>(url: string): ResponseObject<TResponse>;
  put<TResponse, TData>(url: string, data: TData): ResponseObject<TResponse>;
}

export type HttpClientFactory = new (baseUrl: string) => IHttpClient;
