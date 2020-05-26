import { Component, OnInit } from '@angular/core';
import {HomepageService} from '../homepage/homepage.service';

@Component({
  selector: 'app-trendy-news',
  templateUrl: './trendy-news.component.html',
  styleUrls: ['./trendy-news.component.scss']
})
export class TrendyNewsComponent implements OnInit {
  trendy: any = [];

  constructor(private homepageService: HomepageService) {}

  ngOnInit() {
  this.getAllTrendys();
  }
  getAllTrendys() {
    this.homepageService.getTrendys().subscribe(result => {
      console.log('results trendy', result);
      this.trendy = result;
    }, error => {
      console.log(error);
    });
  }
}
