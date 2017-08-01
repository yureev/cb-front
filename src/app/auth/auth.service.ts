import {Injectable} from '@angular/core';
import { HttpService} from './http.service';



@Injectable()
export class AuthService {
  authTrue: boolean = false;
  constructor(private httpService: HttpService) {}

  getAuth(username: string, password: string) {
    this.httpService.postData( {"username" : username, "password" : password } )
      .subscribe((data) => {
        if (data.token.access_token) {
          this.authTrue = true;
        } else {
          this.authTrue = false;
        }
        console.log(this.authTrue);
      });
  }
}


