import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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
  public ROLES : Array<any> = [
    {name : "User",code :  "USER"},
    {name : "Admin",code :  "ADMIN"}
  ]

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  register(){
    console.log(this.registerFormGroup.value);
  }

  createRegisterForm() {
    this.registerFormGroup = this._fb.group({
      userName: [null, [Validators.required, Validators.maxLength(50)]],
      userEmail: [null, [Validators.required, Validators.maxLength(40)]],
      userContactNo: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],

      gender: this._fb.group({
        name: [null, [Validators.required]],
        code: [null, [Validators.required]]
      }),

      userAddress: [null, [Validators.required, Validators.maxLength(500)]],
      password: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      userRole: this._fb.group({
        name: [null, [Validators.required]],
        code: [null, [Validators.required]]
      })
    })
  }

}
