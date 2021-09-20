import { Component, OnInit } from '@angular/core';
import {PocetnaService} from "../pocetna.service";
import {ProductsService} from "../products/products.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  pageSize = 5;
  total = 16;
  e = 1;
  c = 1;
  f=1;
  constructor(public s: PocetnaService ,public s1: ProductsService) { }

  log:any;
  ngOnInit(): void {
    this.getTypeTehnika();
    this.getTypeAutomoto()
    this.getTypeHrana()
    this.getTypeNekretnina()
    this.getTypePosao()
    this.getTypesRazno()
    this.getTypesOdjeca()
    this.getFeaturedPosts();
this.getCheapPosts()
  }



getPostsbyType(tabela:string,tip:any){
    this.s1.GetPostsbyType(tabela,tip).subscribe(res=>{
      this.s1.getPostsbyType=res;
 this.s1.numberofProducts=this.s1.getPostsbyType.length;
      console.log(res)

    })
}



  nekretnineType:any;
  getTypeNekretnina(){
    this.s.getTypesNekretnine().subscribe(
      res=>{
        this.nekretnineType=res;
      }
    )
  }
  automotoType:any;
  getTypeAutomoto(){
    this.s.getTypesAutomoto().subscribe(
      res=>{
        this.automotoType=res;
      }
    )
  }
  tehnikaType:any;
  getTypeTehnika(){
    this.s.getTypesTehnika().subscribe(
      res=>{
        this.tehnikaType=res;
      }
    )
  } posaoType:any;
  getTypePosao(){
    this.s.getTypesPosao().subscribe(
      res=>{
        this.posaoType=res;
      }
    )
  }
  hranaType:any;
  getTypeHrana(){
    this.s.getTypesHrana().subscribe(
      res=>{
        this.hranaType=res;
      }
    )
  }
  raznoType:any;
 getTypesRazno(){
    this.s.getTypesRazno().subscribe(
      res=>{
        this.raznoType=res;
      }
    )
  }
  odjecaType:any;
 getTypesOdjeca(){
    this.s.getTypesOdjeca().subscribe(
      res=>{
        this.odjecaType=res;
      }
    )
  }


spiner:boolean=false;
  featuredPosts:any
getFeaturedPosts(){
   this.s.getFeaturedPosts().subscribe(res=>{
   this.featuredPosts=res;
     console.log(res)
     this.spiner=true
   })
}
spiner1:boolean=false;
cheapPosts:any;
 getCheapPosts(){
   this.s.getCheapPosts().subscribe(res=>{
     this.cheapPosts=res;
     this.spiner1=true   })
 }

  login()
  {
    this.log = 1;
  }





}
