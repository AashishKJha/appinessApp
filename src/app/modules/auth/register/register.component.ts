import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';


@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	@Input('label') label: string;
	public registerFormGroup: FormGroup;
	constructor(private _fb: FormBuilder, private auth: AuthService, protected _usr: UserService, protected router: Router) { }

	ngOnInit() {
		this.createRegisterForm();
	}

	register() {
		if (this.registerFormGroup.invalid) {
			alert("Invalid Registration Form")
			this.getAllErrors(this.registerFormGroup)
		} else if (this.registerFormGroup.get('user_password').value !== this.registerFormGroup.get('confirm_password').value) {
			alert("Password & Confirm Password Not mathched")
		}
		else {
			this.auth.register(this.registerFormGroup.value).subscribe((response) => {
				alert(response.message);
				let current_user = JSON.parse(localStorage.getItem("current_user"));
				if (current_user && current_user.user_role == "ADMIN") {
					this.router.navigate(['user/list']);
				} else {
					this.router.navigate(['auth/login'])
				}
			}, (err) => {
				alert(err.error.message);
			})
		}
	}

	createRegisterForm() {
		this.registerFormGroup = this._fb.group({
			user_password: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
			confirm_password: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
		})
	}

	public getAllErrors(form) {
		this.markAsTouched(form);
		let count = 0;
		for (const key in form.controls) {
			if (form.get(key).invalid) {
				break;
			}
			count++;
		}
		return count;
	}

	/**
	 * To mark invalid for as touched
	 * @param form pass form here
	 */
	public markAsTouched(form) {
		for (let controls in form.controls) {
			let control = form.get(controls)
			if (control instanceof FormControl) {
				control.markAsTouched();
				control.updateValueAndValidity();
			} else if (control instanceof FormGroup) {
				this.getAllErrors(control)
			}
		}
	}

	navTo() {
		this.router.navigate(["/auth/login"])
	}
}
