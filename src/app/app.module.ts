import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RoleComponent } from './role/role.component';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: AuthComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'role', component: RoleComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  declarations: [ AppComponent, AuthComponent, RoleComponent],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
