import { Component, OnInit } from '@angular/core';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  lastName:any;
  firstName:any;

  constructor() { }

  ngOnInit(): void {
    this.firstName = localStorage.getItem('firstName')
    this.lastName = localStorage.getItem('lastName')
  }

  logOut(){
    localStorage.clear();
    window.location.reload();
  }
  

}
