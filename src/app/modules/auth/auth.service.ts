import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public header = {
    "Content-Type": "application/json"
  }

  constructor(private http: HttpService) { }

  authenticate(body) {
    let url = `api/auth/login`
    return this.http.post(url, body, this.header);
  }

  register(body) {
    let url = `api/auth/register`
    return this.http.post(url, body, this.header);
  }

}
