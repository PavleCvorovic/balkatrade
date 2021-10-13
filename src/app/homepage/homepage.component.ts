import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {PocetnaService} from "../pocetna.service";
import {ProductsService} from "../products/products.service";
import { ViewportScroller } from '@angular/common'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


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
  tip:boolean=false;
  constructor(public s: PocetnaService ,public s1: ProductsService,private viewportScroller: ViewportScroller, private router:Router) {


  }
  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }




  log:any;
  token:any=0;
  userId:any;
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
    this.getNewestPosts()
    if(sessionStorage.getItem('token'))
    {
        this.token = sessionStorage.getItem('token');
        this.userId = sessionStorage.getItem('userId');
    }
  }

  logout()
  {
    sessionStorage.clear();
    this.token = 0;
    this.router.navigate(['.']);
  }
  odjavi()
  {
    sessionStorage.clear();
    this.router.navigate(['../login']);

  }
  lang:number=37.4218;
  long:number=37.4218;


getPostsbyType(tabela:string,tip:any){
    this.tip=true;
    this.s1.GetPostsbyType(tabela,tip).subscribe(res=>{
      this.s1.getPostsbyType=res;
 this.s1.numberofProducts=this.s1.getPostsbyType.length;
 this.onClick('#produkti')

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
  }

  posaoType:any;
  
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
  spiner2:boolean=false;
 newestPosts:any;
  getNewestPosts(){
    this.s.getNewestPosts().subscribe(res=>{
      this.newestPosts=res;
      this.newestPosts.reverse;
      this.spiner2=true   })
  }
  login()
  {
    this.log = 1;
  }





}
