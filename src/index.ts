import {
  Anyres,
  IAnyresRequestOptions,
  IAnyresResponse,
  IHttpAdapter,
} from "@anyres/core";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { from as observableFrom, Observable } from "rxjs";
import { map } from "rxjs/operators";

export class AxiosAdapter implements IHttpAdapter {

  public http: AxiosInstance = axios.create();

  public get(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    let axiosRequestConfig: AxiosRequestConfig = {};
    if (options) {
      axiosRequestConfig = {
        params: options.params,
        headers: options.headers,
      };
    }
    return observableFrom<AxiosResponse<any>>(this.http.get(url, axiosRequestConfig))
      .pipe(
        map((response) => {
          return {
            status: response.status,
            headers: response.headers,
            body: response.data,
            json: () => response.data,
          };
        }),
    );
  }

  public post(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    let axiosRequestConfig: AxiosRequestConfig = {};
    if (options) {
      axiosRequestConfig = {
        params: options.params,
        headers: options.headers,
      };
    }
    return observableFrom(this.http.post(url, options.body || {}, axiosRequestConfig))
      .pipe(
        map((response) => {
          return {
            status: response.status,
            headers: response.headers,
            body: response.data,
            json: () => response.data,
          };
        }),
    );
  }

  public put(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    let axiosRequestConfig: AxiosRequestConfig = {};
    if (options) {
      axiosRequestConfig = {
        params: options.params,
        headers: options.headers,
      };
    }
    return observableFrom(this.http.put(url, options.body || {}, axiosRequestConfig))
      .pipe(
        map((response) => {
          return {
            status: response.status,
            headers: response.headers,
            body: response.data,
            json: () => response.data,
          };
        }),
    );
  }

  public delete(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    let axiosRequestConfig: AxiosRequestConfig = {};
    if (options) {
      axiosRequestConfig = {
        params: options.params,
        headers: options.headers,
      };
    }
    return observableFrom(this.http.delete(url, axiosRequestConfig))
      .pipe(
        map((response) => {
          return {
            status: response.status,
            headers: response.headers,
            body: response.data,
            json: () => response.data,
          };
        }),
    );
  }

  public patch(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    let axiosRequestConfig: AxiosRequestConfig = {};
    if (options) {
      axiosRequestConfig = {
        params: options.params,
        headers: options.headers,
      };
    }
    return observableFrom(this.http.patch(url, options.body || {}, axiosRequestConfig))
      .pipe(
        map((response) => {
          return {
            status: response.status,
            headers: response.headers,
            body: response.data,
            json: () => response.data,
          };
        }),
    );
  }

}

