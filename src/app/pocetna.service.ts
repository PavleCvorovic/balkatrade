import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PocetnaService {

  constructor(public http:HttpClient) {  }

   getTypesTehnika(){
   return this.http.get('http://localhost:8000/api/getTehnikaTip');

   }
  getTypesNekretnine(){
    return this.http.get('http://localhost:8000/api/getNekretnineTip');

  }
  getTypesHrana(){
    return this.http.get('http://localhost:8000/api/getHranaTip');

  }
  getTypesOdjeca(){
    return this.http.get('http://localhost:8000/api/getOdjecaTip');

  }
  getTypesRazno(){
    return this.http.get('http://localhost:8000/api/getRaznoTip');

  }
  getTypesAutomoto(){
    return this.http.get('http://localhost:8000/api/getAutomotoTip');

  }
  getTypesPosao(){
    return this.http.get('http://localhost:8000/api/getPosaoTip');

  }


}
