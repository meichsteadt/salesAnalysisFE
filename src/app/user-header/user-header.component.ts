import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  @Input() user;
  lastYear = new Date().getFullYear() - 1;
  constructor() { }

  ngOnInit() {

  }

  compareYears(thisYear, lastYear) {
    if (thisYear >= lastYear) {
      return 'text-success';
    }
    else {
      return 'text-danger';
    }
  }

  diff(thisYear, lastYear) {
    return Math.round((thisYear - lastYear) * 100) / 100;
  }

}
