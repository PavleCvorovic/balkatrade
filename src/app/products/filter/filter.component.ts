import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };

  ngOnInit(): void {
  }

}
