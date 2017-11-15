import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Customer } from '../customer.model';
import { CustomersService } from '../customers.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers: [ CustomersService ]
})
export class CustomerDetailsComponent implements OnInit {
  customerId: number;
  user;
  customer;
  salesYTD;
  salesLastYear;
  products;
  salesNumbers;
  recommendedItems;
  missingBestSellers;
  missingGrowthItems;

  lastYear = new Date().getFullYear() - 1;
  currentMonth: number = new Date().getMonth();
  constructor(private router: Router, private route: ActivatedRoute, private customerService: CustomersService, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe((urlParameters) => {
      this.customerId = parseInt(urlParameters['id']);
    });

    this.userService.getUser().subscribe(response => {
      this.user = response;
    })

    this.customerService.getCustomer(this.customerId).subscribe(response => {
      let customer = response["customer"]
      this.customer = new Customer(customer["id"], customer["name"], customer["state"], customer["position"]);
      this.salesYTD = response["customer"]["sales_ytd"];
      this.salesLastYear = response["customer"]["sales_last_year"];
      this.products = response["products"];
      this.salesNumbers = response["sales_numbers"];
      this.recommendedItems = response["recommended_items"];
      this.missingBestSellers = response["missing_best_sellers"];
      this.missingGrowthItems = response["missing_growth_items"];
      console.log(this.recommendedItems)
    });
  }

  toDate(year, month) {
    return new Date(year, month - 1)
  }


  getLink(string) {
    return '/customers/' + this.customerId + '/' + string
  }

  loop(n, arr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
  }
}
