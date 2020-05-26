import { Injectable } from '@angular/core';
import {RequestService} from '../../request/request.service';
import {Constants} from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


constructor(private requestService: RequestService) { }
public login(email: string, password: string) {
  return this.requestService.postRequest('api/user/login', {email, password});
}
}


