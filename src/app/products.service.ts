import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(limit, sortBy, sortOrder) {
    return this.http.get("https://homelegance-sales-analysis.herokuapp.com/products.json?limit=" + limit + "&sort_by=" + sortBy + "&sort_order=" + sortOrder);
  }
}
