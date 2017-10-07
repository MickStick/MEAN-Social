import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  token: any;
  user: any;
  url: string;

  constructor(private http: Http) {
    this.url = 'http://localhost:4444/users/register';
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.post(this.url, user, {headers : headers}).map(res => res.json());
  }

}
