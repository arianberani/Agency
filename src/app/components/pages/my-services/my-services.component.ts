import { Component, OnInit } from '@angular/core';
import {HomepageService} from '../homepage/homepage.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent implements OnInit {
  servicesbox: any = [];
  constructor(private homepageService: HomepageService) { }

  ngOnInit() {
    this.getAllServicessbox();
  }
  getAllServicessbox() {
    this.homepageService.getServicessbox().subscribe( result => {
      console.log( 'results servicesbox', result);
      this.servicesbox = result;
    }, error => {
      console.log(error);
    });
}
}
