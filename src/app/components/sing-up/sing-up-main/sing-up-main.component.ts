import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SingUpSService} from '../../../services/sing-up/sing-up-s.service';
import {observable} from 'rxjs';

@Component({
  selector: 'app-sing-up-main',
  templateUrl: './sing-up-main.component.html',
  styleUrls: ['./sing-up-main.component.scss']
})
export class SingUpMainComponent implements OnInit {
  singupform = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])

  });
constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private router: Router, private signupService: SingUpSService) {
  }

  /* get f() {
     return this.singupform.get('firstName');
   }*/

  ngOnInit() {
  }

  onSubmit() {
    alert(JSON.stringify(this.singupform.value));
    const values = this.singupform.value;
    /* this.httpClient.post('http://localhost:3000/singup', values).subscribe(response => {
       this.router.navigate(['log-in']);
     });*/
this.signupService.signup({ email: values.email, password: values.password}).subscribe(response => {
    });
  }
  }
