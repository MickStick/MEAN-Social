import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname: String;
  lname: String;
  uname: String;
  email: String;
  pword: String;
  rpword: String;

  constructor() { }


  ngOnInit() {
  }

  onRegisterSubmit() {
   const user = {
     fname: this.fname,
     lname: this.lname,
     uname: this.uname,
     email: this.email,
     pword: this.pword
   };
  }

}
