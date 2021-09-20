import { Component, OnInit } from '@angular/core';
import {ProductsService} from "./products.service";
import {HttpClient} from "@angular/common/http";
import {PocetnaService} from "../pocetna.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public s1:ProductsService,public  s :PocetnaService) { }

  p = 1;
  ngOnInit(): void {
    this.s1.getRandomPosts();
  }

}
