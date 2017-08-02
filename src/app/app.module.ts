import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RoleComponent } from './role/role.component';
import { AuthGuard } from './auth/auth.guard';
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {HttpService} from "./auth/http.service";

import { ApolloClient } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {provideClient} from "./auth/graphql.client";


// const client = new ApolloClient();
// export function provideClient(): ApolloClient {
//   return client;
// }


// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: AuthComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'role', component: RoleComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule, ApolloModule.forRoot(provideClient) ],
  declarations: [ AppComponent, AuthComponent, RoleComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ AuthGuard, AuthService, HttpService ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
