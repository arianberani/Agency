import {Injectable} from '@angular/core';
import {Constants} from '../../constants/constants';
import {RequestService} from '../../request/request.service';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../login/login.service';


@Injectable({
  providedIn: 'root'
})
export class SingUpSService {
  servicesUrl: string = Constants.services;
  private signupurl: string = Constants.users;

  constructor(private customS: SingUpSService, private requestService: RequestService, private http: HttpClient) {
  }

  /*getServiceById(id) {
    return this.getRequest(this.servicesUrl, id);
  }*/

  /*
    getRequest(id) {
      return this.http.get(endPoint + 'users');
    }
  */

  signup(params) {
    return this.requestService.postRequest('api/user/register', params);
  }
}
