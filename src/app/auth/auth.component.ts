import { Component, OnInit } from '@angular/core';
import { HttpService} from './http.service';
import { NgForm} from '@angular/forms';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
  providers: [HttpService, AuthService]
})
export class AuthComponent {

  constructor(private authService: AuthService) {}
  onSubmit( form: NgForm) {
    this.authService.getAuth(form.value.authLogin, form.value.authPass);
}


  // onSubmit(form: NgForm) {
  //   this.httpService.postData( {"username" : form.value.authLogin, "password" : form.value.authPass } )
  //     .subscribe((data) => {
  //     if (data.token.access_token) {
  //       this.authTrue = true;
  //     } else {
  //       this.authTrue = false;
  //     }
  //       console.log(this.authTrue);
  //   });
  // }

}


