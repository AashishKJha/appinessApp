import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-list-user',
	templateUrl: './list-user.component.html',
	styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
	@ViewChild("templateModel") templateModal: TemplateRef<any>;
	
	userDataList = new MatTableDataSource();
	displayedColumns: Array<string> = ['id', 'user_name', 'user_email', 'user_mobile_number', 'action'];


	resultsLength: number = 0;
	isLoadingResults: boolean = true;
	userFormGroup: any;
	constructor(private _usr: UserService,
		private router: Router,
		private _fb: FormBuilder
	) { }
	ngOnInit() {
		this.getAllUsers();
	}



	getAllUsers() {
		this._usr.getAllUsers().subscribe((users) => {
			if (users.message) {
				this.userDataList.data = users.message
			}
		});
	}

	editUserById(row, index) {
		this.router.navigate([`user/update-user/${row._id}`])
	}

	deleteUserById(row, i) {
		if (confirm("Are you sure to delete user " + row.user_name)) {
			this._usr.deleteUser(row._id).subscribe((delResp) => {
				if (delResp.message) {
					alert("Deleted Successfully")
					this.getAllUsers();
				}
			}, err => {
				alert(err);
			})
		}

	}
}