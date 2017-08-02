import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
// import {ActivatedRoute} from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    // private route: ActivatedRoute
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return true;

    // if (this.auth.getAuth() === 'true') {
    //   return true;
    // }
    // this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
    // return false;
  }
}
