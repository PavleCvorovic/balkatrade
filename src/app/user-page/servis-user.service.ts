import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServisUserService {

  constructor( public u: HttpClient) { }


  getUserPosts(id:number){
    return this.u.get('http://localhost:8000/api/GetPostByUser/'+id);
  }
  getUserIdPosts(req:any){
    return this.u.post('http://localhost:8000/api/getUserPostId',req);
  }
  modUserIdPosts(req:any){
  var req1={
    naziv:'',
    cijena:'',
    opis:'',
    id:'',
    user_id:'',
    index:''
  }
  req1.naziv=req[0].naziv
    req1.cijena=req[0].cijena
    req1.opis=req[0].opis
    req1.id=req[0].id
    req1.user_id=req[0].user_id
req1.index=req[0].index
    console.log(req1)
    return this.u.post('http://localhost:8000/api/modPostByUser',req1);

  }
  delAsUser(req:any){

    return this.u.post('http://localhost:8000/api/delAsUser',req);


  }


}
