import {Injectable} from '@angular/core';
import { HttpService} from './http.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Router} from '@angular/router';



@Injectable()
export class AuthService {
  constructor(private httpService: HttpService, private router: Router) {
    localStorage.setItem('enter', 'false');
  }

  userAuth(username: string, password: string) {
    this.httpService.postData( {'username' : username, 'password' : password } )
      .subscribe((data) => {
        if (data.token.access_token) {
          this.httpService.getAuthInfo(  data.token.access_token )
            .subscribe((dataInfo) => {
              localStorage.setItem('name', dataInfo.profile.name);
              localStorage.setItem('rolename', dataInfo.profile.rolename);
            });
          localStorage.setItem('enter', 'true');
          this.router.navigate(['/role']);
        } else {
          localStorage.setItem('enter', 'false');
          this.router.navigate(['/']);
        }
      });
  }

  getAuth() {
    return localStorage.getItem('enter');
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('enter');
    this.router.navigate(['/']);
  }
}


