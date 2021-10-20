import { ActivatedRoute } from '@angular/router';
import { PocetnaService } from './../pocetna.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private http:HttpClient, private servis:PocetnaService, private route:ActivatedRoute) { }
  kategorijeAdmin= 0;
  useriAdmin=0;
  oglasiAdmin= 0;
  useri:any;
  userId:any;
  id = "";
  oglasiSvi:any;

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


  getAll()
  {

  }



  kategorijeDodavanje()
  {
      this.useriAdmin = 0;
      this.oglasiAdmin = 0;
      this.kategorijeAdmin= 1;

      console.log(this.kategorijeAdmin);

  }


  ngOnInit(): void {
    this.servis.getUsers().subscribe(res=>
      {
        this.useri = res;
      })

  }

  req={
    id:'',
    index:''
}

  prihvati(id:any, index:any)
  {

    this.req.id = id;
    this.req.index = index;
    console.log(this.req);

    this.http.post('https://balkazon.me/Balkatrade/api/setAllNew', this.req)
    .subscribe(res=>
      {
        this.oglasiSvi=res;
        alert('postavljen oglas!');
      })
  }

  odbijOglas(id:any, index:any)
  {
    this.req.id = id;
    this.req.index = index;
    console.log(this.req);

     this.http.post('https://balkazon.me/Balkatrade/api/deleteNew', this.req)
    .subscribe(res=>
      {
        this.oglasiSvi= res;
        alert('obrisan oglas!');
      })
  }

  oglasi()
  {
    this.useriAdmin = 0;
    this.kategorijeAdmin = 0;
    this.oglasiAdmin = 1;
    this.http.get('https://balkazon.me/Balkatrade/api/getAllNew')
    .subscribe(res=>
      {
        this.oglasiSvi= res;
        console.log(res);

      })

  }

  useriAd()
  {
    this.oglasiAdmin=0;
    this.kategorijeAdmin = 0;
    this.useriAdmin = 1;
    console.log(this.useriAd);

  }

  obrisiUsera(id:any)
  {


    return this.http.delete('https://balkazon.me/Balkatrade/api/deleteUser/'+id)
    .subscribe(res=>{
      alert("obrisan korisnik");
      this.useri = res;
    });


  }




  dodajAutomoto()
  {

      this.tip.tip = this.kategorijaAutomoto;
      console.log(this.tip);

      this.http.post("https://balkazon.me/Balkatrade/api/addAutoTip",this.tip)
      .subscribe(res=>
        {
          alert('dadata kategorija')
        })
  }

  dodajHrana()
  {
    this.tip.tip = this.kategorijaHrana;
    console.log(this.tip);

    this.http.post("https://balkazon.me/Balkatrade/api/addHranaTip",this.tip)
    .subscribe(res=>
      {
        alert('dadata kategorija')
      })
  }



  dodajNekretnina()
  {
    this.tip.tip = this.kategorijaNekretnina;
    console.log(this.tip);

    this.http.post("https://balkazon.me/Balkatrade/api/addNekretnineTip",this.tip)
    .subscribe(res=>
      {
        alert('dadata kategorija')
      })
  }

  dodajPosao()
  {
    this.tip.tip = this.kategorijaPosao;
    console.log(this.tip);

    this.http.post("https://balkazon.me/Balkatrade/api/addPosaoTip",this.tip)
    .subscribe(res=>
      {
        alert('dadata kategorija')
      })
  }

  dodajOdjeca()
  {
    this.tip.tip = this.kategorijaOdjeca;
    console.log(this.tip.tip);

    this.http.post("https://balkazon.me/Balkatrade/api/addOdjecaTip",this.tip)
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

      this.http.post("https://balkazon.me/Balkatrade/api/addTehnikaTip",this.tip)
      .subscribe(res=>
        {
          alert('dadata kategorija')
        })
  }

}
