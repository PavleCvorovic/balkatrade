import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products/products.service";
import {PocetnaService} from "../pocetna.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-random-produkti',
  templateUrl: './random-produkti.component.html',
  styleUrls: ['./random-produkti.component.css']
})
export class RandomProduktiComponent implements OnInit {

  constructor(public s1:ProductsService,public  s :PocetnaService,public http:HttpClient) { }
  p = 1;
  ngOnInit(): void {
    this.s1.getRandomPosts();
  }

  rockets(){

  }


}
