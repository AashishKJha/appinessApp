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
}
