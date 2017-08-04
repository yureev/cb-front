import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
  providers: [ AuthService ]
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) {}
  onSubmit( form: NgForm) {
    this.authService.userAuth(form.value.authLogin, form.value.authPass);
  }
  ngOnInit() {
  }
}



