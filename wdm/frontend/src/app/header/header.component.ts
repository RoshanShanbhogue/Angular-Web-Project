import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  BrandName = "Clean Slate Solutions";
  navEle = 'Home';
  name: string = "My Account";
  username: string;

  constructor(private nameService: NameService) {}

  ngOnInit() {
    this.nameService.receivedFilter.subscribe((data: string) => {
      this.username = data;
      data = data.charAt(0).toUpperCase() + data.substr(1).toLowerCase()
      this.name = "Hi, " + data;
    });
  }

}
