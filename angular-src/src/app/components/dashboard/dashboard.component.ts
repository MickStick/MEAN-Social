import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../../services/authentication.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private FlashMsg: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.userLogout();
    this.FlashMsg.show('User Logged Out!', {cssClass : 'msg msg-caution', timeout: 3000});
    this.router.navigate(['/login']);
 }
}
