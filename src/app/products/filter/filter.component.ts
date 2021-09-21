import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(public s:ProductsService,private viewportScroller: ViewportScroller) { }
  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }


  AutomotoF:any={
    tabela:'automotopolja',
    cijenaMin:'',
    cijenaMax:'',
    godisteMin:'',
    godisteMax:'',
    kubikazaMin:'',
    kubikazaMax:'',
    marka:'',
    model:''
  }
  RaznoF:any={
    tabela:'raznopolja',
    cijenaMin:'',
    cijenaMax:''}

  HranaF:any={
    tabela:'hranapolja',
    cijenaMin:'',
    cijenaMax:'',
    domace:''}
  PlataF:any={
    tabela:'posaopolja',
    cijenaMin:'',
    cijenaMax:'',
   }
  OdjecaF:any={
    tabela:'odjecapolja',
    cijenaMin:'',
    cijenaMax:'',
  }
  TehnikaF:any={
    tabela:'tehnikapolja',
    cijenaMin:'',
    cijenaMax:'',
  }
  NekretnineF:any={
    tabela:'nekretninepolja',
    cijenaMin:'',
    cijenaMax:'',
  }
filtrirajA(){

 this.onClick('#produkti');
  this.s.Filter(this.AutomotoF).subscribe(res=>{
    this.s.getPostsbyType=res;
  })

  this.AutomotoF.cijenaMin=null;
  this.AutomotoF.cijenaMax=null;
  this.AutomotoF.godisteMin=null;
  this.AutomotoF.godisteMax=null;
  this.AutomotoF.kubikazaMax=null;
  this.AutomotoF.kubikazaMin=null;
  this.AutomotoF.marka=null;
  this.AutomotoF.model=null;

}
filtrirajR(){
  this.onClick('#produkti');
  this.s.Filter(this.RaznoF).subscribe(res=>{
    this.s.getPostsbyType=res;
    this.s.numberofProducts=this.s.getPostsbyType;
  })
this.RaznoF.cijenaMin='';
  this.RaznoF.cijenaMax='';

}

  filtrirajH(){
    this.onClick('#produkti');
    this.s.Filter(this.HranaF).subscribe(res=>{
      this.s.getPostsbyType=res;
      this.s.numberofProducts=this.s.getPostsbyType.length;
    })
    this.HranaF.cijenaMax='';
    this.HranaF.cijenaMin='';
    this.HranaF.domace=''

  }
  filtrirajP(){
    this.onClick('#produkti');
    this.s.Filter(this.PlataF).subscribe(res=>{
      this.s.getPostsbyType=res;
      this.s.numberofProducts=this.s.getPostsbyType.length;
    })
    this.PlataF.cijenaMax='';
    this.PlataF.cijenaMin='';


  }
  filtrirajN(){
    this.onClick('#produkti');
    this.s.Filter(this.NekretnineF).subscribe(res=>{
      this.s.getPostsbyType=res;
      this.s.numberofProducts=this.s.getPostsbyType.length;
    })
    this.NekretnineF.cijenaMax='';
    this.NekretnineF.cijenaMin='';


  }
  filtrirajT(){
    this.onClick('#produkti');
    this.s.Filter(this.TehnikaF).subscribe(res=>{
      this.s.getPostsbyType=res;
      this.s.numberofProducts=this.s.getPostsbyType.length;
    })
    this.TehnikaF.cijenaMax='';
    this.TehnikaF.cijenaMin='';


  }
  filtrirajO(){
    this.onClick('#produkti');
    this.s.Filter(this.OdjecaF).subscribe(res=>{
      this.s.getPostsbyType=res;
      this.s.numberofProducts=this.s.getPostsbyType.length;
    })
    this.OdjecaF.cijenaMax='';
    this.OdjecaF.cijenaMin='';


  }

  ngOnInit(): void {
  }

}
