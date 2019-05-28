import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup : FormGroup;

  constructor(private _fb : FormBuilder) { }

  ngOnInit() {
    this.createLoginForm();
  }

  authenticate(){
    if(this.loginFormGroup.invalid){
      console.log("Form Invalid");
    }
  }

  createLoginForm(){
    this.loginFormGroup = this._fb.group({
      userEmail : [null , [Validators.required, Validators.minLength(10)]],
      password : [null, [Validators.required]]
    })
  }

}
