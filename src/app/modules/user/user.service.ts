import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }


  getAllUsers() {
    let url = `api/user/all`;
    return this.http.get(url)
  }

  updateUser(userData){
    let url = `api/user/update`;
    return this.http.post(url , userData)
  }

  deleteUser(userId){
    let url = `api/user/${userId}`;
    return this.http.delete(url);
  }

  getUserById(userId){
    let url = `api/user/${userId}`;
    return this.http.get(url);
  }
}
