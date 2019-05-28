import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  user : any;

  constructor(private _usr : UserService, private act :ActivatedRoute) { }

  ngOnInit() {
    this.act.paramMap.subscribe((pat) => {
      if(pat['params'].userId){
        this.getUserById(pat['params'].userId)
      }
    })
  }

  getUserById(userId){
    this._usr.getUserById(userId).subscribe((user) => {
      this.user = user.message;
    })
  }

}
