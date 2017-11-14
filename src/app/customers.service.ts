import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomers(sortBy, sortOrder) {
    return this.http.get("http://localhost:3000/customers.json?sort_by=" + sortBy + "&sort_order=" + sortOrder)
  }

  getCustomer(customerId) {
    return this.http.get("http://localhost:3000/customers/" + customerId + ".json")
  }

}
