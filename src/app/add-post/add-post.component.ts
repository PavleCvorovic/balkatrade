import { PocetnaService } from './../pocetna.service';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {LocationService} from "./location.service";



@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {


  constructor(private fb:FormBuilder, private http:HttpClient, private s:PocetnaService, private router:Router,private l: LocationService) { }

  token:any=0;
  userId:any
  ngOnInit(): void {

    if(sessionStorage.getItem('token'))
    {
        this.token = sessionStorage.getItem('token');
        this.userId = sessionStorage.getItem('userId');
    }
    this.getTypeTehnika();
    this.getTypeAutomoto()
    this.getTypeHrana()
    this.getTypeNekretnina()
    this.getTypePosao()
    this.getTypesRazno()
    this.getTypesOdjeca()
this.uzmiLokaciju()
  }
 l1:any;
  l2:any;
  uzmiLokaciju(){
    this.l.getPosition().then(pos=>
    {
      this.l1=pos.lat;
      this.l2=pos.lng;
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
    });
  }


  nekretnineType:any;
  getTypeNekretnina(){
    this.s.getTypesNekretnine().subscribe(
      res=>{
        this.nekretnineType=res;
      }
    )
  }
  automotoType:any;
  getTypeAutomoto(){
    this.s.getTypesAutomoto().subscribe(
      res=>{
        this.automotoType=res;
      }
    )
  }
  tehnikaType:any;
  getTypeTehnika(){
    this.s.getTypesTehnika().subscribe(
      res=>{
        this.tehnikaType=res;
      }
    )
  } posaoType:any;
  getTypePosao(){
    this.s.getTypesPosao().subscribe(
      res=>{
        this.posaoType=res;
      }
    )
  }
  hranaType:any;
  getTypeHrana(){
    this.s.getTypesHrana().subscribe(
      res=>{
        this.hranaType=res;
      }
    )
  }
  raznoType:any;
 getTypesRazno(){
    this.s.getTypesRazno().subscribe(
      res=>{
        this.raznoType=res;
      }
    )
  }
  odjecaType:any;
 getTypesOdjeca(){
    this.s.getTypesOdjeca().subscribe(
      res=>{
        this.odjecaType=res;
      }
    )
  }



  featuredPosts:any
getFeaturedPosts(){
   this.s.getFeaturedPosts().subscribe(res=>{
   this.featuredPosts=res;
     console.log(res)
   })
}


  kategorija=''
  automotoVrsta=''
  tehnikaVrsta=''
  nekretnineVrsta=''
  odjecaVrsta=''
  posaoVrsta=''
  raznoVrsta=''
  hranaVrsta=''






  url: any;
    onSelectFile(event:any) {

        this.url = event.target.files[0]
        var reader = new FileReader();
       reader.readAsDataURL(event.target.files[0]);
       reader.onload=(e:any)=>
       {
         this.prikazSlike.push(e.target.result);
       }

    }



    urls:any = [];
    prikazSlike:any=[];

      onChangeFile(event: any): void {

        {
          this.urls = <File>event.target.files;


        }

      }


  unosAutomoto = this.fb.group(
    {

        tabela:'automotopolja',
        naziv:'',
        prva_slika:'',
        slike:'',
        automoto_vrsta:this.automotoVrsta,
        marka:'',
        model:'',
        cijena:'',
        opis:'',
        kontakt:'',
        lokacija:'',
        stanje:'',
        kubikaza:'',
        kilometraza:'',
        godina_proizvodnje:'',
        boja:'',
        datum_isteka_registracije:''
    }
  )

  unosTehnika = this.fb.group(
    {
        tabela:'tehnikapolja',
        tehnika_vrsta:this.tehnikaVrsta,
        naziv:'',
        prva_slika:'',
        slike:[],
        cijena:'',
        kontakt:'',
        opis:'',
        lokacija:'',
        stanje:'',
        godina_proizvodnje:'',
        boja:''



    }
  )
  unosOdjeca = this.fb.group(
    {
        tabela:'odjecapolja',
        odjeca_vrsta:this.odjecaVrsta,
        naziv:'',
        prva_slika:'',
        slike:'',
        cijena:'',
        kontakt:'',
        opis:'',
        lokacija:'',
        stanje:''
    }
  )
  unosNekretnine= this.fb.group(
    {
      tabela:'nekretninepolja',
      nekretnine_vrsta:this.nekretnineVrsta,
      naziv:'',
      prva_slika:'',
      slike:'',
      cijena:'',
      kontakt:'',
      opis:'',
      lokacija:'',
      kvadratura:'',
      tip_vlasnistva:''
    }
  )
  unosPosao = this.fb.group(
    {
      tabela:'posaopolja',
      posao_vrsta:this.posaoVrsta,
      naziv:'',
      prva_slika:'',
      slike:'',
      plata:'',
      kontakt:'',
      opis:'',
      lokacija:''
    }
  )

  unosHrana= this.fb.group
  (
    {
      tabela:'hranapolja',
      hrana_vrsta:this.hranaVrsta,
      naziv:'',
      prva_slika:'',
      slike:'',
      cijena:'',
      kontakt:'',
      opis:'',
      lokacija:'',
      kolicina:''
    }
  )

  unosRazno= this.fb.group
  (
    {
      tabela:'raznopolja',
      razno_vrsta:this.raznoVrsta,
      naziv:'',
      prva_slika:'',
      slike:'',
      cijena:'',
      kontakt:'',
      opis:'',
      lokacija:''
    }
  )




  dodajTehnika()
  {

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')
    var params = new FormData();
    params.append('prva_slika', this.url)
    this.unosTehnika.controls['tehnika_vrsta'].setValue(this.tehnikaVrsta);
    params.append('tehnika_vrsta',this.unosTehnika.controls['tehnika_vrsta'].value )
    params.append('cijena', this.unosTehnika.controls['cijena'].value)
    params.append('stanje', this.unosTehnika.controls['stanje'].value)
    params.append('lokacija', this.unosTehnika.controls['lokacija'].value)
    params.append('naziv', this.unosTehnika.controls['naziv'].value)
    params.append('kontakt', this.unosTehnika.controls['kontakt'].value)
    params.append('opis', this.unosTehnika.controls['opis'].value)
    params.append('godina_proizvodnje', this.unosTehnika.controls['godina_proizvodnje'].value)
    params.append('boja', this.unosTehnika.controls['boja'].value)
    params.append('tabela',this.unosTehnika.controls['tabela'].value)
    params.append('sirina',this.l1)
    params.append('duzina',this.l2)
    for(let i=0; i<this.urls.length;i++){
      params.append('slike[]', this.urls[i])
    }
    if(this.s.user!=0 )
    {
      params.append('user_id', this.s.user)
    }
    console.log(this.url);
    console.log(this.urls)

    // this.unosTehnika.controls['tehnika_vrsta'].setValue(1);
    // this.unosTehnika.controls['tabela'].setValue('tehnikapolja');
    // this.unosTehnika.controls['prva_slika'].setValue(this.url);
    // console.log(this.unosTehnika.getRawValue());
    this.http.post('https://balkazon.me/Balkatrade/api/addAsUser', params).subscribe
    (res=>
      {
        alert("Uspjesno dodat oglas")
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      });

    console.log(this.kategorija);


  }
  dodajAutomoto()
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')
    var params = new FormData();
    params.append('prva_slika', this.url)
    this.unosAutomoto.controls['automoto_vrsta'].setValue(this.automotoVrsta);
    params.append('automoto_vrsta',this.unosAutomoto.controls['automoto_vrsta'].value )
    params.append('cijena', this.unosAutomoto.controls['cijena'].value)
    params.append('marka', this.unosAutomoto.controls['marka'].value)
    params.append('model', this.unosAutomoto.controls['model'].value)
    params.append('naziv', this.unosAutomoto.controls['naziv'].value)
    params.append('kontakt', this.unosAutomoto.controls['kontakt'].value)
    params.append('opis', this.unosAutomoto.controls['opis'].value)
    params.append('tabela',this.unosAutomoto.controls['tabela'].value)
    params.append('sirina',this.l1)
    params.append('duzina',this.l2)
    for(let i=0; i<this.urls.length;i++){
      params.append('slike[]', this.urls[i])
    }
    if(this.s.user!=0)
    {
      params.append('user_id', this.s.user)
    }


    // this.unosAutomoto.controls['automoto_vrsta'].setValue(1);
    // this.unosAutomoto.controls['tabela'].setValue('automotopolja');
    // this.unosAutomoto.controls['prva_slika'].setValue(this.url);
    console.log(this.automotoVrsta);
    console.log(this.unosAutomoto.controls['automoto_vrsta'].value);

    this.http.post('https://balkazon.me/Balkatrade/api/addAsUser', params).subscribe
    (res=>
      {
        alert("Uspjesno dodat oglas")
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      });


  }
  dodajOdjeca()
  {

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')
    var params = new FormData();
    params.append('prva_slika', this.url)
    this.unosOdjeca.controls['odjeca_vrsta'].setValue(this.odjecaVrsta);
    params.append('odjeca_vrsta',this.unosOdjeca.controls['odjeca_vrsta'].value )
    params.append('cijena', this.unosOdjeca.controls['cijena'].value)
    params.append('stanje', this.unosOdjeca.controls['stanje'].value)
    params.append('lokacija', this.unosOdjeca.controls['lokacija'].value)
    params.append('naziv', this.unosOdjeca.controls['naziv'].value)
    params.append('kontakt', this.unosOdjeca.controls['kontakt'].value)
    params.append('opis', this.unosOdjeca.controls['opis'].value)
    params.append('tabela',this.unosOdjeca.controls['tabela'].value)
    params.append('sirina',this.l1)
    params.append('duzina',this.l2)

    for(let i=0; i<this.urls.length;i++){
      params.append('slike[]', this.urls[i])
    }
    if(this.s.user!=0)
    {
      params.append('user_id', this.s.user)
    }
    // this.unosOdjeca.controls['odjeca_vrsta'].setValue(1);
    // this.unosOdjeca.controls['tabela'].setValue('odjecapolja');
    // this.unosOdjeca.controls['prva_slika'].setValue(this.url);
    // console.log(this.unosOdjeca.getRawValue());
    this.http.post('https://balkazon.me/Balkatrade/api/addAsUser', params).subscribe
    (res=>
      {
        alert("Uspjesno dodat oglas")
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      });

    console.log(this.kategorija);


  }

  dodajNekretnina()
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')
    var params = new FormData();
    params.append('prva_slika',this.url)
    this.unosNekretnine.controls['nekretnine_vrsta'].setValue(this.nekretnineVrsta);
    params.append('nekretnine_vrsta',this.unosNekretnine.controls['nekretnine_vrsta'].value )
    params.append('cijena', this.unosNekretnine.controls['cijena'].value)
    params.append('lokacija', this.unosNekretnine.controls['lokacija'].value)
    params.append('naziv', this.unosNekretnine.controls['naziv'].value)
    params.append('kontakt', this.unosNekretnine.controls['kontakt'].value)
    params.append('opis', this.unosNekretnine.controls['opis'].value)
    params.append('tabela',this.unosNekretnine.controls['tabela'].value)
    params.append('kvadratura', this.unosNekretnine.controls['kvadratura'].value)
    params.append('tip_vlasnistva', this.unosNekretnine.controls['tip_vlasnistva'].value)
    params.append('sirina',this.l1)
    params.append('duzina',this.l2)
    for(let i=0; i<this.urls.length;i++){
      params.append('slike[]', this.urls[i])
    }
    if(this.s.user!=0 )
    {
      params.append('user_id', this.s.user)
    }
    // this.unosNekretnine.controls['nekretnine_vrsta'].setValue(1);
    // this.unosNekretnine.controls['tabela'].setValue('nekretninepolja');
    // this.unosNekretnine.controls['prva_slika'].setValue(this.url);
    console.log("hkjnbu");
    this.http.post('https://balkazon.me/Balkatrade/api/addAsUser', params).subscribe
    (res=>
      {
        alert("Uspjesno dodat oglas")
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      });

    console.log(this.kategorija);

  }

  dodajPosao()
  {

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')
    var params = new FormData();
    params.append('prva_slika', this.url)
    this.unosPosao.controls['posao_vrsta'].setValue(this.posaoVrsta);
    params.append('posao_vrsta',this.unosPosao.controls['posao_vrsta'].value )
    params.append('plata', this.unosPosao.controls['plata'].value)
    params.append('lokacija', this.unosPosao.controls['lokacija'].value)
    params.append('naziv', this.unosPosao.controls['naziv'].value)
    params.append('kontakt', this.unosPosao.controls['kontakt'].value)
    params.append('opis', this.unosPosao.controls['opis'].value)
    params.append('tabela',this.unosPosao.controls['tabela'].value)
    params.append('sirina',this.l1)
    params.append('duzina',this.l2)
    for(let i=0; i<this.urls.length;i++){
      params.append('slike[]', this.urls[i])
    }
    if(this.s.user!=0 )
    {
      params.append('user_id', this.s.user)
    }
    // this.unosPosao.controls['posao_vrsta'].setValue(1);
    // this.unosPosao.controls['tabela'].setValue('posaopolja');
    // this.unosPosao.controls['prva_slika'].setValue(this.url);
    // console.log(params);
    this.http.post('https://balkazon.me/Balkatrade/api/addAsUser', params).subscribe
    (res=>
      {
        alert("Uspjesno dodat oglas")
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      });

    // console.log(this.kategorija);
  }

  dodajHrana()
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')
    var params = new FormData();
    params.append('prva_slika', this.url)
    this.unosHrana.controls['hrana_vrsta'].setValue(this.hranaVrsta);
    params.append('hrana_vrsta',this.unosHrana.controls['hrana_vrsta'].value )
    params.append('cijena', this.unosHrana.controls['cijena'].value)
    params.append('lokacija', this.unosHrana.controls['lokacija'].value)
    params.append('naziv', this.unosHrana.controls['naziv'].value)
    params.append('kontakt', this.unosHrana.controls['kontakt'].value)
    params.append('opis', this.unosHrana.controls['opis'].value)
    params.append('tabela',this.unosHrana.controls['tabela'].value)
    params.append('kolicina', this.unosHrana.controls['kolicina'].value);
    params.append('sirina',this.l1)
    params.append('duzina',this.l2)
    for(let i=0; i<this.urls.length;i++){
      params.append('slike[]', this.urls[i])
    }
    if(this.s.user!=0)
    {
      params.append('user_id', this.s.user)
    }
    // this.unosHrana.controls['hrana_vrsta'].setValue(1);
    // this.unosHrana.controls['tabela'].setValue('hranapolja');
    // this.unosHrana.controls['prva_slika'].setValue(this.url);
    // console.log(this.unosHrana.getRawValue());
    this.http.post('https://balkazon.me/Balkatrade/api/addAsUser', params).subscribe
    (res=>
      {
        alert("Uspjesno dodat oglas")
        setTimeout(() => {
          window.location.reload();
        }, 1500);

      });

    console.log(this.kategorija);
  }

  dodajRazno()
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')
    var params = new FormData();
    params.append('prva_slika', this.url)
    this.unosRazno.controls['razno_vrsta'].setValue(this.raznoVrsta);
    params.append('razno_vrsta',this.unosRazno.controls['razno_vrsta'].value )
    params.append('cijena', this.unosRazno.controls['cijena'].value)
    params.append('lokacija', this.unosRazno.controls['lokacija'].value)
    params.append('naziv', this.unosRazno.controls['naziv'].value)
    params.append('kontakt', this.unosRazno.controls['kontakt'].value)
    params.append('opis', this.unosRazno.controls['opis'].value)
    params.append('tabela',this.unosRazno.controls['tabela'].value)
    params.append('sirina',this.l1)
    params.append('duzina',this.l2)
    console.log(params.get('duzina'))
    for(let i=0; i<this.urls.length;i++){
      params.append('slike[]', this.urls[i])
    }
    if(this.s.user!=0)
    {
      params.append('user_id', this.s.user)
    }
    // this.unosRazno.controls['razno_vrsta'].setValue(1);
    // this.unosRazno.controls['tabela'].setValue('raznopolja');
    // this.unosRazno.controls['prva_slika'].setValue(this.url);
    // console.log(this.unosRazno.getRawValue());
    this.http.post('https://balkazon.me/Balkatrade/api/addAsUser', params).subscribe
    (res=>
      {
        alert("Uspjesno dodat oglas")
      });

    console.log(this.kategorija);
  }

  odjavi()
  {
    sessionStorage.clear();
    this.router.navigate(['../login']);

  }
}
