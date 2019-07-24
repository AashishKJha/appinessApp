import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meants';

  constructor(private _rot : Router){

  }

  isLoggedIn(){
    return JSON.parse(localStorage.getItem('current_user'))?true : false
  }

  logout(){
    localStorage.removeItem('current_user');
    this._rot.navigate(['auth/login']);
  }
}
