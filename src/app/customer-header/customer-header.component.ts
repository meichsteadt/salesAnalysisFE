import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {
  @Input() customer;
  @Input() salesYTD;
  @Input() salesLastYear;
  @Input() user;
  lastYear = new Date().getFullYear() - 1;
  constructor() { }

  ngOnInit() {
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

}
