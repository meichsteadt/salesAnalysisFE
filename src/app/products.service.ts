import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { backendConfig } from './api-keys';
import { isDevMode } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(limit, sortBy, sortOrder) {
    return this.http.get(this.url() + "/products.json?limit=" + limit + "&sort_by=" + sortBy + "&sort_order=" + sortOrder);
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
