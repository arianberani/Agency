import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public isLoggedIn() {
    const token = localStorage.getItem('token');
    return token !== null && token.length > 0;
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/log-in']);
}
}
