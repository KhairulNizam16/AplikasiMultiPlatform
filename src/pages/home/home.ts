import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  articles:any;
  constructor(
    public navCtrl: NavController,
    private newsProvider: NewsProvider) {
      this.showNews()
  }

  showNews(){
    this.newsProvider.getNews()
    .subscribe(news =>{
      this.articles = news['articles'];
      console.log(this.articles);
    })
  }

}
