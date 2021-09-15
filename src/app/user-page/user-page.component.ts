import { Component, OnInit } from '@angular/core';
import {ServisUserService} from "./servis-user.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(public u:ServisUserService) { }

  ngOnInit(): void {
    this.getUserPosts();
  }

  userPosts:any;
  getUserPosts(){
    this.u.getUserPosts(1).subscribe(res=>{
      this.userPosts=res
      console.log(res)
    })
  }
delAsUser(tabela:string,id:number){
  let req={
    tabela:tabela,
    id:id,
    user_id:1
  }
this.u.delAsUser(req).subscribe(res=>{
  this.userPosts=res;
})
}

}
