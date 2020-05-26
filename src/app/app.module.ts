import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { SharingVitalityComponent } from './components/pages/sharing-vitality/sharing-vitality.component';
import { NextProjectComponent } from './components/pages/next-project/next-project.component';
import { MyServicesComponent } from './components/pages/my-services/my-services.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { PeopleSaysComponent } from './components/pages/people-says/people-says.component';
import {CarouselModule, PaginationModule, TabsModule} from 'ngx-bootstrap';
import { TrendyNewsComponent } from './components/pages/trendy-news/trendy-news.component';
import { SendMessageComponent } from './components/pages/send-message/send-message.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import {HttpClientModule} from '@angular/common/http';
import { SingUpDetailsComponent } from './components/sing-up/sing-up-details/sing-up-details.component';
import { SingUpMainComponent } from './components/sing-up/sing-up-main/sing-up-main.component';
import { HomeComponent } from './components/pages/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogInDetailsComponent } from './components/log-in/log-in-details/log-in-details.component';
import { LogInMainComponent } from './components/log-in/log-in-main/log-in-main.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import {Ng2TableModule} from 'ngx-datatable';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SharingVitalityComponent,
    NextProjectComponent,
    MyServicesComponent,
    PortfolioComponent,
    PeopleSaysComponent,
    TrendyNewsComponent,
    SendMessageComponent,
    FooterComponent,
    ApexChartsComponent,
    SingUpDetailsComponent,
    SingUpMainComponent,
    HomeComponent,
    LogInDetailsComponent,
    LogInMainComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    ReactiveFormsModule,
    Ng2TableModule,
    FormsModule,
    PaginationModule.forRoot(),
    TabsModule,
    CommonModule
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
