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
    req1.naziv=req.naziv
    req1.cijena=req.cijena
    req1.opis=req.opis
    req1.id=req.id
    req1.user_id=req.user_id
    req1.index=req.index
    console.log(req1)
    return this.u.post('http://localhost:8000/api/modPostByUser',req1);

  }
  delAsUser(req:any){

    return this.u.post('http://localhost:8000/api/delAsUser',req);


  }


}
