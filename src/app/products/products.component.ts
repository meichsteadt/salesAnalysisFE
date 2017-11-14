import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  products;
  user;
  limit: number = 200;
  sortBy = "position";
  sortOrder = "asc";

  constructor(private router: Router, private productService: ProductsService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(response => {
      this.user = response;
    })

    this.getProducts(this.limit, this.sortBy, this.sortOrder);
  }

  getProducts(limit, sortBy, sortOrder) {
    this.productService.getProducts(limit, sortBy, sortOrder).subscribe(response => {
      this.products = response;
    });
  }

  sort(sortBy) {
    if (sortBy == this.sortBy) {
      this.sortOrder = this.switchOrder(this.sortOrder)
      this.getProducts(this.limit, sortBy, this.sortOrder)
    }
    else {
      this.sortBy = sortBy
      this.getProducts(this.limit, sortBy, "asc")
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

  compareYears(product) {
    if(product.growth >= 0) {
      return "text-success"
    }
    else {
      return "text-danger"
    }
  }

  diff(thisYear, lastYear) {
    return Math.round((thisYear - lastYear) * 100)/100
  }

  goTo(id) {
    this.router.navigate(["products", id])
  }
}
