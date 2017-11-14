import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "works"
  user;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(response => {
      this.user = response;
    })
  }
}
