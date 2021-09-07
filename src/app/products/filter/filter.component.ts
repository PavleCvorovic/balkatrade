import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(public s:ProductsService) { }


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

  this.s.Filter(this.RaznoF).subscribe(res=>{
    this.s.getPostsbyType=res;
  })
this.RaznoF.cijenaMin='';
  this.RaznoF.cijenaMax='';

}

  filtrirajH(){
    console.log(this.HranaF)
    this.s.Filter(this.HranaF).subscribe(res=>{
      this.s.getPostsbyType=res;
    })
    this.HranaF.cijenaMax='';
    this.HranaF.cijenaMin='';
    this.HranaF.domace=''

  }
  filtrirajP(){
    console.log(this.PlataF)
    this.s.Filter(this.PlataF).subscribe(res=>{
      this.s.getPostsbyType=res;
    })
    this.PlataF.cijenaMax='';
    this.PlataF.cijenaMin='';


  }
  filtrirajN(){
    console.log(this.NekretnineF)
    this.s.Filter(this.NekretnineF).subscribe(res=>{
      this.s.getPostsbyType=res;
    })
    this.NekretnineF.cijenaMax='';
    this.NekretnineF.cijenaMin='';


  }
  filtrirajT(){
    console.log(this.TehnikaF)
    this.s.Filter(this.TehnikaF).subscribe(res=>{
      this.s.getPostsbyType=res;
    })
    this.TehnikaF.cijenaMax='';
    this.TehnikaF.cijenaMin='';


  }
  filtrirajO(){
    console.log(this.OdjecaF)
    this.s.Filter(this.OdjecaF).subscribe(res=>{
      this.s.getPostsbyType=res;
    })
    this.OdjecaF.cijenaMax='';
    this.OdjecaF.cijenaMin='';


  }

  ngOnInit(): void {
  }

}
