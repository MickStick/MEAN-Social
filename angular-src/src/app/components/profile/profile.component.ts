import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  posts: Number
  constructor(
    private authService: AuthenticationService,
    private FlashMsg: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.posts = profile.user.posts;
      if(this.posts != 0){
      }else{
        this.FlashMsg.show('No Posts', {cssClass: 'msg-caution msg', timeout: 1500});
      }
    },
    err => {
      console.log(err);
      return false;
    }
  );
  }

}
