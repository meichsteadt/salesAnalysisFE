import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [ CustomersService ]
})
export class CustomersComponent implements OnInit {

  constructor(private router: Router, private customersService: CustomersService, private userService: UserService) { }
  customers;
  user;
  lastYear = new Date().getFullYear() - 1;
  sortBy: string = "sales_ytd";
  sortOrder: string = "desc";
  ngOnInit() {
    this.getCustomers(this.sortBy, this.sortOrder);

    this.userService.getUser().subscribe(response => {
      this.user = response;
    })
  }

  goTo(id) {
    this.router.navigate(["customers", id]);
  }

  compareYears(thisYear, lastYear) {
    if(thisYear >= lastYear) {
      return "text-success"
    }
    else {
      return "text-danger"
    }
  }

  diff(thisYear, lastYear) {
    return Math.round((thisYear - lastYear) * 100)/100
  }

  diffPercentage(thisYear, lastYear) {
    return this.diff(thisYear, lastYear)/lastYear
  }

  getCustomers(sortBy, sortOrder) {
    this.customersService.getCustomers(sortBy, sortOrder).subscribe(response => {
      this.customers = response;
    })
  }

  sort(sortBy) {
    if (sortBy == this.sortBy) {
      this.sortOrder = this.switchOrder(this.sortOrder)
      this.getCustomers(sortBy, this.sortOrder)
    }
    else {
      this.sortBy = sortBy
      this.getCustomers(sortBy, "desc")
    }
  }

  switchOrder(order) {
    if(order === "desc") {
      return "asc"
    }
    else {
      return "desc"
    }
  }

  sortStyle(sortBy, sortOrder) {
    if(sortBy === this.sortBy && sortOrder == this.sortOrder) {
      return true
    }
    else {
      return false
    }
  }

}
