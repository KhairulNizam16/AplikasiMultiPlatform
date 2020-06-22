import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API:string = "http://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=aeed49c1a175431486eb386763dda1f3";
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getNews() {
    return this.http.get(API)
  }

}
