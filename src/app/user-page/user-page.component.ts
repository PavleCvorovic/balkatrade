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
    this.servis.user= this.id
  }


  idM:number=0;
  reqId:any={
    tabela:'',
    id:'',
    user_id:1
  }
  idPost:any;
  public getIdPost(id:number,tabela:string,user_id:number){
    this.reqId.id=id;
this.reqId.user_id=user_id;
    this.reqId.tabela=tabela;
    this.u.getUserIdPosts(this.reqId).subscribe(res=>{
      this.idPost=res;
      this.idM=id;
      console.log(res)
    })


  }

public modPosts(){
    this.u.modUserIdPosts(this.idPost).subscribe(res=>{

    })



}


  public sw(id:number,tabela:string){
    if (id==0){
      this.idM=id
    }
    else if (id==-1){
      this.modPosts();
      this.idM=id;

    }
     else if(id!=-1 && id!=0){

    this.getIdPost(id,tabela,2);
     }

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
  this.servis.user = 0;
  this.router.navigate(['../../login']);
}

dodajKaoUser()
{
  setTimeout(()=>{                           // <<<---using ()=> syntax
    this.router.navigate(['../../add']);
  }, 100);

}


}
