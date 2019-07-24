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

	constructor(private _fb: FormBuilder, private auth: AuthService, private route: Router) { }

	ngOnInit() {
		this.createLoginForm();
	}

	authenticate() {
		if (this.loginFormGroup.invalid) {
			alert("Login Form Invalid")
			return;
		} else {
			this.auth.authenticate(this.loginFormGroup.value).subscribe((response) => {
				localStorage.setItem("current_user", JSON.stringify(response.message));
				if (response.message.user_role == "ADMIN") {
					this.route.navigate(['user/list']);
				} else {
					this.route.navigate([`user/update-user/${response.message.user_id}`])
				}
			}, (err) => {
				alert(err.error.message)
			})
		}
	}

	createLoginForm() {
		this.loginFormGroup = this._fb.group({
			user_email: [null, [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(30)]],
			user_password: [null, [Validators.required]]
		})
	}

}
