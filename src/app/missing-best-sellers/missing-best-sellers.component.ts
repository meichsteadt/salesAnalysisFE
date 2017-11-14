import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-missing-best-sellers',
  templateUrl: './missing-best-sellers.component.html',
  styleUrls: ['./missing-best-sellers.component.css'],
})
export class MissingBestSellersComponent implements OnInit {
  productId: number;
  customer;
  missingBestSellers;
  salesYTD;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe((urlParameters) => {
      this.productId = parseInt(urlParameters['id']);
    });
    this.http.get("http://localhost:3000/customers/" + this.productId + ".json").subscribe(response => {
      let customer = response["customer"]
      this.customer = new Customer(customer["id"], customer["name"], customer["state"], customer["position"]);
      this.missingBestSellers = response["missing_best_sellers"];
      this.salesYTD = response["sales_ytd"];
    })
  }

}
