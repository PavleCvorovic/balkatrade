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
    return this.http.get('http://localhost:8000/api/getAutoTip');

  }
  getTypesPosao(){
    return this.http.get('http://localhost:8000/api/getPosaoTip');

  }
  productId:any;
  productSlike:any;
  hasId:boolean=false;
  getId(id:string,tabela:string){
    var tableId={
      id:'',
      tabela:''
    }
    tableId.id=id;
    tableId.tabela=tabela;
    return this.http.post('http://localhost:8000/api/getAllId',tableId).subscribe(res=>{
      this.productId=res;
      this.productSlike=this.productId.podaci;
      console.log(this.productSlike)
      this.hasId=true;
      console.log(res)
  });


}

}
