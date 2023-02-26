import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'shared';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.less']
})
export class LogInComponent implements OnInit {
  login:string | undefined; 
  password:string | undefined;


  constructor(public getData: ProfileService) { }

  ngOnInit(): void {
  }

  logIn(){
    this.getData.autorize$.subscribe((event:any)=>{

      if(event.status == true){
        localStorage.setItem('firstName', event.firstName);
        localStorage.setItem('lastName', event.lastName);
        localStorage.setItem('token', event.token);
        localStorage.setItem('phoneNumber', event.phoneNumber);
        localStorage.setItem('WebSite', event.WebSite);
  
  
        window.location.replace('/home');
      }
    
    })
  }

}
