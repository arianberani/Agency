import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../../../services/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in-main',
  templateUrl: './log-in-main.component.html',
  styleUrls: ['./log-in-main.component.scss']
})
export class LogInMainComponent implements OnInit {
  public loginForm: FormGroup;
  submitted = false;
  usersArray: any = [];
constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    // this.loginForm = formBuilder.group({
    //   email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
    //   password: new FormControl(null, Validators.compose([Validators.required, Validators.required])),
    //
    // });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });
}

  get f() {
    return this.loginForm.controls;
  }


  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    /*this.httpClient.post<any>('http://localhost:3000/api/user/login', {email, password}).subscribe(response => {*/
    this.loginService.login(email, password).subscribe(response => {

      console.log(response);
      if (response.status === 'success') {
        localStorage.setItem('token', response.token);
        this.router.navigate(['']);
      } else {
        console.log('Wrong email or password');
      }
    });

    // this.submitted = true;
    // // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   /*this.router.navigate(['']);*/
    //   console.log('wrong');
    //   return;
    // }
    // const values = this.loginForm.value;
    //
    // this.usersArray.forEach(element => {
    //   if (this.loginForm.value.email === element.email && this.loginForm.value.password === element.password) {
    //     this.router.navigate(['']);
    //     console.log('its on db');
    //   } else {
    //   }
    // });
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }
}
