import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment as env } from '../../environments/environment';

const url = env.apiUrl;
const baseOptions = {
	params: new HttpParams()
		.set('api_key', `${env.apiKey}`)
		.set('format', `${env.apiResFormat}`)
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) { }

  /**
   * Generates Http Options with parameters and the method used in the api
   *
   * @param method
   * @param params
   */
  protected setParameters(method: string, params: object) {
  	const httpOptions = baseOptions;

  	httpOptions.params = httpOptions.params.set('method', `${method}`);

  	for (const [param, value] of Object.entries(params)) {
  		httpOptions.params = httpOptions.params.set(param, `${value}`);
  	}

    return httpOptions;
  }

  /**
   * Call the get method to run the request
   * 
   * @param httpOptions 
   */
  protected request(httpOptions) {
    return this.http.get(url, httpOptions);
  }
}
