import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {
	constructor() {

	}

	canActivate(next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		return this.isValidate();
	}

	canLoad(): boolean {
		return this.isValidate();
	}

	isValidate() {
		let current_user = JSON.parse(localStorage.getItem('current_user'));
		if (current_user.user_role == 'ADMIN') {
			return true;
		} else {
			return false;
		}

	}
}

