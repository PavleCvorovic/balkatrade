import { Component, OnInit } from '@angular/core';
import {ServisUserService} from "./servis-user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PocetnaService} from "../pocetna.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(public u:ServisUserService, private route:ActivatedRoute, private servis:PocetnaService, private router:Router) { }
  ngOnInit(): void {
    this.getUserPosts();
  }


  id = this.route.snapshot.params['id'];

  userPosts:any;
  getUserPosts(){
    this.u.getUserPosts(this.id).subscribe(res=>{
      this.userPosts=res
      console.log(this.id)
    })
  }
delAsUser(tabela:string,id:number){
  let req={
    tabela:tabela,
    id:id,
    user_id:this.id
  }
this.u.delAsUser(req).subscribe(res=>{
  this.userPosts=res;
})
}

logout()
{
  this.servis.user = '';
  this.router.navigate(['../../login']);
}


}
