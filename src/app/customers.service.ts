import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { backendConfig } from './api-keys';
import { isDevMode } from '@angular/core';

@Injectable()
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomers(sortBy, sortOrder) {
    return this.http.get(this.url() + "/customers.json?sort_by=" + sortBy + "&sort_order=" + sortOrder)
  }

  getCustomer(customerId) {
    return this.http.get(this.url() + "/customers/" + customerId + ".json")
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
