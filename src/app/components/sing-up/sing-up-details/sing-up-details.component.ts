import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
/*import {SingUpSService} from '../../services/sing-up/sing-up-s.service';*/

@Component({
  selector: 'app-sing-up-details',
  templateUrl: './sing-up-details.component.html',
  styleUrls: ['./sing-up-details.component.scss']
})
export class SingUpDetailsComponent implements OnInit {
/*  data: any = [];
  singup: any;
  element: any = [];*/
  constructor( /*private route: ActivatedRoute, private singUpSService: SingUpSService*/) { }

  ngOnInit() {
 /* this.getIdFromUrl();*/
  }/*
  getIdFromUrl() {
  this.data = this.route.params.subscribe(params => {
    this.singup = params['id '];
    this.getService();
  });
}*//*
  getService() {
    this.singUpSService.getServiceById(this.singup).subscribe(res => {
      console.log((res));
      this.element = res;
    }, error => {
      console.log(error);
    });
  }*/
}
