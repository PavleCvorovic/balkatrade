import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient) { }


getPostsbyType:any
  GetPostsbyType(tabela:string,tip:any){
    var req={
      tabela:'',
      tip:''
    }
    req.tabela=tabela;
    req.tip=tip;
    return  this.http.post('http://localhost:8000/api/getPostsAll',req);

  }



}
