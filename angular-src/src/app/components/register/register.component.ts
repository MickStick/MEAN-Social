import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../services/validate.service';

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

  constructor(private valService: ValidateService) { }


  ngOnInit() {
  }

  onRegisterSubmit() {
   const user = {
     fname: this.fname,
     lname: this.lname,
     uname: this.uname,
     email: this.email,
     pword: this.pword,
     rpword: this.rpword
   };

   if (!this.valService.valRegister(user)) {
    console.log('All Fields Are Required');
   }else {
     console.log(user);
   }
  }

EmailVal() {
    if (!this.valService.regEmailValidate(this.email)) {
      console.log('Invalid Email');
    }else {
      console.log('Email Accepted!');
    }
  }

  PasswordVal() {
    if (!this.valService.regPasswordValidate(this.pword)) {
      console.log('Password Not Strong Enough');
    }else {
      console.log('Password Accepted!!');
    }
  }

  RPasswordVal() {
    if (!this.valService.regRPasswordValidate(this.pword, this.rpword)) {
      console.log('Passwords Must Match');
    }else {
      console.log('Password Are A Match!!');
    }
  }

}
