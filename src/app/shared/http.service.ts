import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


/**
 * This class is use for perform all common http requests.
 */
@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

	
  private requestOptions(headerOptions?: any): any {
    let options = {};


    if (headerOptions == null) {
      let current_user = JSON.parse(localStorage.getItem('current_user'));
      console.log(current_user);

      // if token is present then set the headers with auth token
      if (current_user.token) {
        options = {
          headers: new HttpHeaders({
            "Authorization": current_user.token,
            "Content-Type": "application/json"
          })
        }
      }
      
    }else {
      options = {
        headers: new HttpHeaders(headerOptions)
      }
    }
    return options;
  }

	
  get(url: string, options?: any): Observable<any> {
    return this.httpClient.get(this.getFullUrl(url), this.requestOptions(options))
  }


  post(url: string, body: any, options?: any): Observable<any> {
    return this.httpClient.post(this.getFullUrl(url), body, this.requestOptions(options))
  }

  delete(url: string, options?: any): Observable<any> {
    return this.httpClient.delete(this.getFullUrl(url), this.requestOptions(options))
  }

  private getFullUrl(url: string): string {
    return environment.envAPIServer + url;
  }


}