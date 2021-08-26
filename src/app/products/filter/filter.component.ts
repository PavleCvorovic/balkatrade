import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(public s:ProductsService) { }
  value: number = 0;
  highValue: number = 2000;
  options: Options = {
    floor: 0,
    ceil: 200000
  }

  cijenaF:any={
    cijena_min:'',
    cijena_max:'',
  }


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
    cijenaMin:0,
    cijenaMax:0}


filtrirajA(){
    this.AutomotoF.cijenaMin=this.cijenaF.cijena_min;
  this.AutomotoF.cijenaMax=this.cijenaF.cijena_max;

  this.s.Filter(this.AutomotoF).subscribe(res=>{
    this.s.getPostsbyType=res;
  })
this.cijenaF.cijena_min=0;
  this.cijenaF.cijena_max=200000;
  this.AutomotoF.cijenaMin=0;
  this.AutomotoF.cijenaMax=null;
  this.AutomotoF.godiste_min=null;
  this.AutomotoF.godiste_max=null;
  this.AutomotoF.kubikaza_max=null;
  this.AutomotoF.kubikaza_min=null;
  this.AutomotoF.marka=null;
  this.AutomotoF.model=null;

}
filtrirajR(){
  this.RaznoF.cijenaMin=this.cijenaF.cijena_min;
  this.RaznoF.cijenaMax=this.cijenaF.cijena_max;
  this.s.Filter(this.RaznoF).subscribe(res=>{
    this.s.getPostsbyType=res;
  })

  this.RaznoF.cijena_max=null;
  this.RaznoF.godiste_min=null;
}


  ngOnInit(): void {
  }

}
