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

    return this.u.post('http://localhost:8000/api/modPostByUser',req);

  }
  delAsUser(req:any){

    return this.u.post('http://localhost:8000/api/delAsUser',req);


  }


}
