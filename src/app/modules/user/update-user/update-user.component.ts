import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  updateFormGroup : FormGroup ;

  constructor(private _usr : UserService,private _fb : FormBuilder, private act :ActivatedRoute, private _router : Router) { }

  ngOnInit() {

    this.updateFormGroup = this._fb.group({
      _id : [null]
    });

    this.act.paramMap.subscribe((pat) => {
      if(pat['params'].userId){
        this.getUserById(pat['params'].userId)
      }
    })
  }

  getUserById(userId){
    this._usr.getUserById(userId).subscribe((user) => {
      this.updateFormGroup.patchValue(user.message);
    })
  }

  upadteUserById(){
    this._usr.updateUser(this.updateFormGroup.value).subscribe((updatedData) => {
      if(updatedData.success){
        alert("User Updated");
        this._router.navigate(['user/list']);
      }
    })
  }

}
