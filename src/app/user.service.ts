import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { backendConfig } from './api-keys';
import { isDevMode } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(this.url() + "/users/1")
  }

  url() {
    if(isDevMode()) {
      return backendConfig.testUrl;
    }
    else {
      return backendConfig.url;
    }
  }

}
