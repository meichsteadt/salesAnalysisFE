import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomers(sortBy, sortOrder) {
    return this.http.get("https://homelegance-sales-analysis.herokuapp.com/customers.json?sort_by=" + sortBy + "&sort_order=" + sortOrder)
  }

  getCustomer(customerId) {
    return this.http.get("https://homelegance-sales-analysis.herokuapp.com/customers/" + customerId + ".json")
  }

}
