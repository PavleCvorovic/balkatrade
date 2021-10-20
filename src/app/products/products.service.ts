import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PocetnaService} from "../pocetna.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) {
  }
spiner:boolean=false;
  swF: any;

  switchFilters(tabela: any) {
    switch (tabela) {
      case"automotopolja": {
        this.swF = 1;
        break;
      }
      case "raznopolja": {
        this.swF = 2;
        break;
      }
      case "hranapolja": {
        this.swF = 3;
        break;
      }
      case "posaopolja": {
        this.swF = 4;
        break;
      }
      case "odjecapolja": {
        this.swF = 5;
        break;
      }
      case "nekretninepolja": {
        this.swF = 6;
        break;
      }
      case "tehnikapolja": {
        this.swF = 7;
        break;
      }
    }
    console.log(this.swF)
  }

  numberofProducts: number = 0;
  getPostsbyType: any

  GetPostsbyType(tabela: string, tip: any) {
    var req = {
      tabela: '',
      tip: ''
    }
    this.switchFilters(tabela);
    req.tabela = tabela;
    req.tip = tip;
    return this.http.post('https://balkazon.me/Balkatrade/api/getPostsAll', req);

  }

  Filter(param: any) {
    return this.http.post('https://balkazon.me/Balkatrade/api/filter', param);


  }
  getRandomPosts(){
    return  this.http.get('https://balkazon.me/Balkatrade/api/getAllRandom').subscribe(res=>{
      this.getPostsbyType=res;
      this.numberofProducts=this.getPostsbyType.length;
      this.spiner=true;

    })

  }
}
