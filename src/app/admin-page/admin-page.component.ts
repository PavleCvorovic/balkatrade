import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private http:HttpClient) { }

  kategorijaAutomoto='';
  kategorijaPosao='';
  kategorijaOdjeca='';
  kategorijaHrana='';
  kategorijaNekretnina='';
  kategorijaTehnika='';
  tip:any;

  ngOnInit(): void {
  }


  dodajAutomoto()
  {

      this.tip = this.kategorijaAutomoto;
      console.log(this.tip);

      this.http.post("http://localhost:8000/api/addAutoTip",this.tip)
      .subscribe(res=>
        {
          alert('dadata kategorija')
        })
  }

  dodajHrana()
  {

  }

  dodajNekretnina()
  {

  }

  dodajPosao()
  {

  }

  dodajOdjeca()
  {

  }

  dodajRazno()
  {

  }

  dodajTehnika()
  {

  }

}
