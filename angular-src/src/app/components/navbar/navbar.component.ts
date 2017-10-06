import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
    $(document).ready(function(){
      $(window).resize(function(){
        if ($('.My-navbar .nav-toggler').css('display') === 'none') {
          $('.My-navbar .nav-container').css({'display': 'block'});
        }else {
          $('.My-navbar .nav-container').css({'display': 'none'});
        }
      });
    });
  }

  navDrop () {
    $('.My-navbar .nav-container').animate({height: 'toggle'});
  }

  ngOnInit() {
  }

}
