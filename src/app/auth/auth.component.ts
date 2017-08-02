import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
  providers: [ AuthService]
})
export class AuthComponent {

  constructor(private authService: AuthService, private router: Router) {}
  onSubmit( form: NgForm) {
    this.authService.userAuth(form.value.authLogin, form.value.authPass);
  }
}


