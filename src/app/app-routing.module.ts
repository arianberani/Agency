import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SingUpMainComponent} from './components/sing-up/sing-up-main/sing-up-main.component';
import {HomeComponent} from './components/pages/home/home.component';
import {LogInMainComponent} from './components/log-in/log-in-main/log-in-main.component';
import {AuthGuard} from './guards/auth.guard';
import {AnonGuard} from './guards/anon.guard';
import {AboutUsComponent} from './components/pages/about-us/about-us.component';


let routes: Routes;
routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-up',
    component: SingUpMainComponent,
    canActivate: [AnonGuard]
  },
  {
    path: 'log-in',
    component: LogInMainComponent,
    canActivate: [AnonGuard],
  },
  {
    path: 'about-us',
    component: AboutUsComponent

  }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
