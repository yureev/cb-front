import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloClient, createNetworkInterface } from 'apollo-client';

// const getGraphql = gql`
//  query {
//     customer(idCode: "2588310454") {
//     id
//     name
//   }
//   }
// `;

const getGraphql = gql`
 query getGraphql($idCode: String) {
    customer(idCode: $idCode) {
    id
    name
  }
  }
`;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
  providers: [ AuthService]
})
export class AuthComponent implements OnInit {
  responce: any;


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

    let variab = "2217606611";

    this.apollo.query({
      query: getGraphql,
      variables: {
        idCode: variab
      }
    }).subscribe((res) => {
      this.responce = res;
      console.log('name', this.responce.data.customer.name);
    });


    // this.apollo.query({
    //   query: getGraphql
    // }).subscribe((res) => {
    //   console.log(1);
    //   this.responce = res;
    //   console.log('name', this.responce.data.customer.name);
    // });
  }
}



