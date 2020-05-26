import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constants/constants';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private BASE_URL: string = Constants.BASE_URL;

  constructor(private http: HttpClient) {}

  getRequest(endPoint) {
    return this.http.get(this.BASE_URL + endPoint);
  }

   postRequest(endPoint, body) {
    return this.http.post<any>(this.BASE_URL + endPoint, body);
  }

/*  deleteRequest(endpoint, id){
    return this.http.delete(this.BASE_URL + endpoint, id);
  }

  putRequest(endpoint, id){
    return this.http.put(this.BASE_URL + endpoint, id);
  }*/

  // getById(endpoint, id){
  //   return this.http.get(this.baseUrl+endpoint, id);
  // }

}
