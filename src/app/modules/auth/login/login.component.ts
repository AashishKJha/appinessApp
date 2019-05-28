import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup;

  constructor(private _fb: FormBuilder, private auth: AuthService, private route : Router) { }

  ngOnInit() {
    this.createLoginForm();
  }

  authenticate() {
    if (this.loginFormGroup.invalid) {
      alert("Login Form Invalid")
      return;
    } else {
      this.auth.authenticate(this.loginFormGroup.value).subscribe((response) => {
        console.log(response)
          localStorage.setItem("current_user" , JSON.stringify(response.message));
          this.route.navigate(['user/list']);
      }, (err) => {
        alert(err.error.message)
      })
    }
  }

  createLoginForm() {
    this.loginFormGroup = this._fb.group({
      user_email: [null, [Validators.required, Validators.minLength(10)]],
      user_password: [null, [Validators.required]]
    })
  }

}
