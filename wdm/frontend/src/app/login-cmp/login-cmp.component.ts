import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UsersService } from '../users.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { NameService } from '../name.service';

@Component({
  selector: 'app-login-cmp',
  templateUrl: './login-cmp.component.html',
  styleUrls: ['./login-cmp.component.css']
})
export class LoginCmpComponent implements OnInit {

  users: User[];
  user: User;

  constructor(private nameService: NameService, private usersService: UsersService, private router: Router) {}

  fetchUsers() {
    this.usersService.getUsers().subscribe((data: any[]) => {
      this.users = data;
      console.log("Data requsted...");
      console.log(this.users);
    });
  }

  fetchUserByName(name, password) {
    this.usersService.getUserByName(name).subscribe((data: any) => {
      this.user = data;
      console.log("Data requested..");
      console.log(this.user);

      if(this.user==null) {
        console.log("Invalid user");
      } else if(this.user.password == password){
        console.log("Valid user: " + this.user.name);
        this.nameService.raiseEvent(this.user.name);
        this.router.navigate(['/']);
      } else {
        console.log("Invalid user.. wrong password");
      }
    });
  }

  addUser(name, email, password) {
    console.log(name + " " + email + " " + password);
    this.usersService.addUser(name, email, password).subscribe(() => {
      this.nameService.raiseEvent(name);
      this.router.navigate(['/']);
    })
  }

  verifyUser(name, password){
    this.fetchUserByName(name, password)
  }

  ngOnInit() {
    this.fetchUsers();
    var panelOne = $(".form-panel.two").height(),
    panelTwo = $(".form-panel.two")[0].scrollHeight;

    $(".form-panel.two")
      .not(".form-panel.two.active")
      .on("click", function(e) {
        e.preventDefault();

        $(".form-toggle").addClass("visible");
        $(".form-panel.one").addClass("hidden");
        $(".form-panel.two").addClass("active");
        $(".form").animate(
          {
            height: panelTwo
          },
          200
        );
      });

    $(".form-toggle").on("click", function(e) {
      e.preventDefault();
      $(this).removeClass("visible");
      $(".form-panel.one").removeClass("hidden");
      $(".form-panel.two").removeClass("active");
      $(".form").animate(
        {
          height: panelOne
        },
        200
      );
    });
  }

}