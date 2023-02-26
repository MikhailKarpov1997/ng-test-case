import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

Injectable()
export class ProfileService {
    public get profile$() { 
        return of({
            firstName:'Tim', 
            lastName: 'Cook', 
            phoneNumber: '+79999999999',
            token: 'yes', 
            WebSite: 'mysite.online'
        }
        
);}


public get autorize$() { 
    return of({
        status: true,
        firstName:'Tim', 
        lastName: 'Cook', 
        phoneNumber: '+79999999999',
        token: 'yes', 
        WebSite: 'mysite.online'
    }
    
);}

}
