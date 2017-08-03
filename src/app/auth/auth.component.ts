import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloClient, createNetworkInterface } from 'apollo-client';

const CurrentUserForProfile = gql`
 query {
    customer(idCode: "2588310454") {
    id
    name
  }
  }
`;


// interface QueryResponse {
//   currentUser
//   loading
// }


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
  providers: [ AuthService]
})
export class AuthComponent implements OnInit{
  loading: boolean;
  currentUser: any;
  data: any;

  constructor(private authService: AuthService, private router: Router, private apollo: Apollo) {}
  onSubmit( form: NgForm) {
    this.authService.userAuth(form.value.authLogin, form.value.authPass);
  }
  ngOnInit() {
    // this.apollo.watchQuery({
    //   query: CurrentUserForProfile
    // }).subscribe(({data}) => {
    //   // console.log(data);
    //   // this.loading = data.loading;
    //   // this.currentUser = data.currentUser;
    // });
    this.apollo.query({
      query: gql`query getAllPosts {
        customer (idCode: "2588310454"){
          id
          name
        }
      }`
    }).subscribe(({data, loading}) => {
      // this.apollo.query({
      //   query: gql`query getAllPosts {
      //   customer (idCode: "2588310454"){
      //     id
      //     name
      //   }
      // }`
      // }).subscribe(({data, loading}) => {
      //   console.log(1);
      //   this.data = data;
      //   this.loading = loading;
      //   console.log('dssdsd', this.data);
      // });
      console.log(1);
      this.data = data;
      this.loading = loading;
      console.log('dssdsd', this.data);
    });
  }
}



