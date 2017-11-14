import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get("https://homelegance-sales-analysis.herokuapp.com/users/1")
  }

}
