
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {


  constructor(private fb:FormBuilder, private http:HttpClient) { }

  kategorija=''
  automotoVrsta=''

  url: any;
    onSelectFile(event:any) {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();

          reader.readAsDataURL(event.target.files[0]);
          reader.onload = (event) => {
            this.url = event.target?.result;
          }
        }
    }
  unosAutomoto = this.fb.group(
    {

        tabela:'automotopolja',
        naziv:'',
        prva_slika:'',
        slike:'',
        automoto_vrsta:"",
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
        tehnika_vrsta:'',
        naziv:'',
        prva_slika:'',
        slike:'',
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
        odjeca_vrsta:'',
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
      nekretnine_vrsta:'',
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


  ngOnInit(): void {

  }

  dodajTehnika()
  {

    this.unosTehnika.controls['tehnika_vrsta'].setValue(1);
    this.unosTehnika.controls['tabela'].setValue('tehnikapolja');
    this.unosTehnika.controls['prva_slika'].setValue(this.url);
    console.log(this.unosTehnika.getRawValue());
    this.http.post('http://localhost:8000/api/addAsUser', this.unosTehnika.getRawValue()).subscribe
    (res=>
      {
        alert("bravo")
      });

    console.log(this.kategorija);


  }
  dodajAutomoto()
  {

    this.unosAutomoto.controls['automoto_vrsta'].setValue(1);
    this.unosAutomoto.controls['tabela'].setValue('automotopolja');
    this.unosAutomoto.controls['prva_slika'].setValue(this.url);
    console.log(this.unosAutomoto.getRawValue());
    this.http.post('http://localhost:8000/api/addAsUser', this.unosAutomoto.getRawValue()).subscribe
    (res=>
      {
        alert("bravo")
      });

    console.log(this.kategorija);


  }
  dodajOdjeca()
  {

    this.unosOdjeca.controls['odjeca_vrsta'].setValue(1);
    this.unosOdjeca.controls['tabela'].setValue('odjecapolja');
    this.unosOdjeca.controls['prva_slika'].setValue(this.url);
    console.log(this.unosOdjeca.getRawValue());
    this.http.post('http://localhost:8000/api/addAsUser', this.unosOdjeca.getRawValue()).subscribe
    (res=>
      {
        alert("bravo")
      });

    console.log(this.kategorija);


  }

  dodajNekretnina()
  {
    this.unosNekretnine.controls['nekretnine_vrsta'].setValue(1);
    this.unosNekretnine.controls['tabela'].setValue('nekretninepolja');
    this.unosNekretnine.controls['prva_slika'].setValue(this.url);
    console.log(this.unosNekretnine.getRawValue());
    this.http.post('http://localhost:8000/api/addAsUser', this.unosNekretnine.getRawValue()).subscribe
    (res=>
      {
        alert("bravo")
      });

    console.log(this.kategorija);

  }
}
