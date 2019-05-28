import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable, merge } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  userDataList = new MatTableDataSource();
  displayedColumns: Array<string> = ['id', 'user_name', 'user_email', 'user_mobile_number', 'action'];


  resultsLength: number = 0;
  isLoadingResults: boolean = true;
  constructor(private _usr: UserService) { }
  ngOnInit() {
    this.getAllUsers()
    
  }

  getAllUsers() {
    this._usr.getAllUsers().subscribe((users) => {
      if(users.message){
        this.userDataList.data = users.message
      }
    });
  }
}