import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private auth0: AuthService) {
    auth0.handleAuthentication();
  }

  ngOnInit() {
  }

  login() {
    this.auth0.login();
  }

  logout() {
    this.auth0.logout();
  }

}
