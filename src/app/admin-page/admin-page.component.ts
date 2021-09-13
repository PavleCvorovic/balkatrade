import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private http:HttpClient) { }

  kategorijaAutomoto="";
  kategorijaPosao='';
  kategorijaOdjeca='';
  kategorijaHrana='';
  kategorijaNekretnina='';
  kategorijaTehnika='';
  tip=
  {
    tip:''
  }

  ngOnInit(): void {
  }


  dodajAutomoto()
  {

      this.tip.tip = this.kategorijaAutomoto;
      console.log(this.tip);

      this.http.post("http://localhost:8000/api/addAutoTip",this.tip)
      .subscribe(res=>
        {
          alert('dadata kategorija')
        })
  }

  dodajHrana()
  {
    this.tip.tip = this.kategorijaHrana;
    console.log(this.tip);

    this.http.post("http://localhost:8000/api/addHranaTip",this.tip)
    .subscribe(res=>
      {
        alert('dadata kategorija')
      })
  }

  dodajNekretnina()
  {
    this.tip.tip = this.kategorijaNekretnina;
    console.log(this.tip);

    this.http.post("http://localhost:8000/api/addNekretnineTip",this.tip)
    .subscribe(res=>
      {
        alert('dadata kategorija')
      })
  }

  dodajPosao()
  {
    this.tip.tip = this.kategorijaPosao;
    console.log(this.tip);

    this.http.post("http://localhost:8000/api/addPosaoTip",this.tip)
    .subscribe(res=>
      {
        alert('dadata kategorija')
      })
  }

  dodajOdjeca()
  {
    this.tip.tip = this.kategorijaOdjeca;
    console.log(this.tip.tip);

    this.http.post("http://localhost:8000/api/addOdjecaTip",this.tip)
    .subscribe(res=>
      {
        alert('dadata kategorija')
      })
  }

  dodajRazno()
  {

  }

  dodajTehnika()
  {
    this.tip.tip = this.kategorijaTehnika;
      console.log(this.tip);

      this.http.post("http://localhost:8000/api/addTehnikaTip",this.tip)
      .subscribe(res=>
        {
          alert('dadata kategorija')
        })
  }

}
