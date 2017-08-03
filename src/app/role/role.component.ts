import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const getGraphql = gql`
 query getGraphql($idCode: String) {
    customer(idCode: $idCode) {
    id
    name
  }
  }
`;

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.sass']
})
export class RoleComponent implements OnInit {
  name = localStorage.getItem('name');
  rolename = localStorage.getItem('rolename');
  responce: any;
  searchClient: boolean;

  constructor(private authService: AuthService, private apollo: Apollo) {}
    logout() {
      this.authService.logout();
  }

  onSubmit( form: NgForm) {

    // let variab = "2217606611";
    let variab2 = form.value.ipnNumber;

    console.log(variab2);

    this.apollo.query({
      query: getGraphql,
      variables: {
        idCode: variab2
      }
    }).subscribe((res) => {
      this.responce = res;
      console.log('name', this.responce.data.customer.name);
    });

    setTimeout(() => {
      this.apollo.query({
        query: getGraphql,
        variables: {
          idCode: variab2
        }
      }).subscribe((res) => {

        console.log(res);
        this.responce = res;
        console.log('name', this.responce.data.customer.name);
      });
    }, 2000);
  }

  ngOnInit() {
    this.searchClient = false;
  }

}
