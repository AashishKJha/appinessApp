import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerFormGroup: FormGroup;

  public GENDER: Array<any> = [
    { name: "Male", code: "MALE" },
    { name: "Female", code: "FEMALE" },
    { name: "Others", code: "OTHERS" }
  ];
  public ROLES: Array<any> = [
    { name: "User", code: "USER" },
    { name: "Admin", code: "ADMIN" }
  ]

  constructor(private _fb: FormBuilder, private auth: AuthService, protected router : Router) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  register() {
    if (this.registerFormGroup.invalid) {
      alert("Invalid Registration Form")
    } else {
      this.auth.register(this.registerFormGroup.value).subscribe((response) => {
        alert(response.message);
        this.router.navigate(['auth/login'])
      }, (err) => {
        alert(err.error.message);
      })
    }
  }

  createRegisterForm() {
    this.registerFormGroup = this._fb.group({
      user_name: [null, [Validators.required, Validators.maxLength(50)]],
      user_email: [null, [Validators.required, Validators.maxLength(40)]],
      user_password: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],

      user_mobile_number: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],

      user_role: this._fb.group({
        name: [null],
        code: [null, [Validators.required]]
      }),
      user_gender: this._fb.group({
        name: [null],
        code: [null, [Validators.required]]
      }),
      confirm_password: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      user_address: [null, [Validators.required, Validators.maxLength(500)]],
      user_dob: [null, [Validators.required]]
    })
  }









}
