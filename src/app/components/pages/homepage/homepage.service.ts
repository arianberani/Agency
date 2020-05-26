import { Injectable } from '@angular/core';
import {Constants} from '../../../constants/constants';
import {RequestService} from '../../../request/request.service';

@Injectable({
  providedIn: 'root'
})

export class HomepageService {
  servicesboxUrl: string = Constants.servicesbox;
  trendysUrl: string = Constants.trendy;

  constructor(private requestService: RequestService) {}



  getServicessbox() {
  return this.requestService.getRequest(this.servicesboxUrl);
}
  getTrendys() {
    return this.requestService.getRequest(this.trendysUrl);
  }
}
