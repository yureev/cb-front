import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const getGraphql = gql`
 query getGraphql($idCode: String) {
    customer(idCode: $idCode) {
    id
    lastName
    firstName
    middleName
    okpo
    maritalStatusId
    maritalStatusName
    dependants
    dependantsUnder18
    dependantsOther
    educationId
    educationName
    isDpa
    isNoOkpo
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
  sectionVar: string;
  lastName: string;
  firstName: string;
  middleName: string;
  okpo: string;
  maritalStatusId: string;
  maritalStatusName: string;
  dependants: string;
  dependantsUnder18: string;
  dependantsOther: string;
  educationId: string;
  educationName: string;
  isDpa: string;
  isNoOkpo: string;
  idCode: string;


  constructor(private authService: AuthService, private apollo: Apollo) {}
    logout() {
      this.authService.logout();
  }

  onSubmit( form: NgForm) {

    // let variab = "2217606611";
    let variab2 = form.value.ipnNumber;

    this.apollo.query({
      query: getGraphql,
      variables: {
        idCode: variab2
      }
    }).subscribe((res) => {
      // this.responce = res;
      // console.log('name', this.responce.data.customer);
    });

    setTimeout(() => {
      this.apollo.query({
        query: getGraphql,
        variables: {
          idCode: variab2
        }
      }).subscribe((res) => {
        this.searchClient = false;
        this.responce = res;
        this.firstName = this.responce.data.customer.firstName;
        this.lastName = this.responce.data.customer.lastName;
        this.middleName = this.responce.data.customer.middleName;
        this.educationName = this.responce.data.customer.educationName;
        this.dependantsOther = this.responce.data.customer.dependantsOther;
        this.dependants = this.responce.data.customer.dependants;
        this.dependantsUnder18 = this.responce.data.customer.dependantsUnder18;
        this.maritalStatusName = this.responce.data.customer.maritalStatusName;
        this.idCode = variab2;
        this.sectionVar = 'aplication';
      });
    }, 2000);
  }

  ngOnInit() {
    this.searchClient = false;
    this.sectionVar = 'first';
  }

}
