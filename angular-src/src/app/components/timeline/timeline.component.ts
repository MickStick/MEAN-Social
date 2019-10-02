import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../../services/authentication.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router} from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  user: Object;

  constructor(
    private authService: AuthenticationService,
    private FlashMsg: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    /*this.authService.getUserData().subscribe(User => {
      this.user = User;
    });*/
    this.user = this.authService.getUserData();
    console.log(this.user);
  }

  onLogout() {
    this.authService.userLogout();
    this.FlashMsg.show('User Logged Out!', {cssClass : 'msg msg-caution', timeout: 3000});
    this.router.navigate(['/login']);
 }
}
