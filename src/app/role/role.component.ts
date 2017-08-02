import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.sass']
})
export class RoleComponent  {
  name = localStorage.getItem('name');
  rolename = localStorage.getItem('rolename');

  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }

  // ngOnInit() {
  //   name = localStorage.getItem('name');
  //   rolename = localStorage.getItem('rolename');
  //
  //   console.log('fdfdf', name, rolename);
  // }

}
