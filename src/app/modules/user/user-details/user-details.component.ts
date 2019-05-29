import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public GENDER: Array<any> = [
    { name: "Male", code: "MALE" },
    { name: "Female", code: "FEMALE" },
    { name: "Others", code: "OTHERS" }
  ];

  public ROLES: Array<any> = [
    { name: "User", code: "USER" },
    { name: "Admin", code: "ADMIN" }
  ]

  constructor() { }

  @Input ('form') userForm : FormGroup

  ngOnInit() {
    this.addControls();
  }

  addControls(){
    this.userForm.addControl('user_name', new FormControl(null, [Validators.required, Validators.maxLength(50)]))
    this.userForm.addControl('user_email', new FormControl(null, [Validators.required]))
    this.userForm.addControl('user_dob', new FormControl(null, [Validators.required]))
    this.userForm.addControl('user_role', new FormGroup({
      name : new FormControl(null),
      code : new FormControl(null, [Validators.required]),
    }))

    this.userForm.addControl('user_gender', new FormGroup({
      name : new FormControl(null),
      code : new FormControl(null, [Validators.required]),
    }))

    this.userForm.addControl('user_address', new FormControl(null, [Validators.required,Validators.maxLength(500)]))

    this.userForm.addControl('user_mobile_number', new FormControl(null, [Validators.required,Validators.maxLength(15), Validators.minLength(10)]))

  }
}
