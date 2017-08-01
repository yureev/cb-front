import {Injectable} from '@angular/core';
import { HttpService} from './http.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Response, Headers} from '@angular/http';



@Injectable()
export class AuthService {
  authTrue: boolean = false;
  constructor(private httpService: HttpService) {}

  userAuth(username: string, password: string) {
    console.log('userAuth', username, password);
    this.httpService.postData( {'username' : username, 'password' : password } )
      .subscribe((data: Response) => {
        console.log('subscribe');
        // if (data.token.access_token) {
        //   this.authTrue = true;
        // } else {
        //   this.authTrue = false;
        // }
        console.log('userAuth', this.authTrue);
      });
  }

  getAuth() {
    console.log('getAuth', this.authTrue);
    return this.authTrue;
  }
}


