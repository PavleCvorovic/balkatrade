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


  ngOnInit(): void {
  }

}
