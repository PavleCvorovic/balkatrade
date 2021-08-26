<<<<<<< Updated upstream
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> Stashed changes

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

<<<<<<< Updated upstream
  constructor(private fb:FormBuilder, private http:HttpClient) { }

  kategorija=''
  automotoVrsta=''

  url: any;
    onSelectFile(event:any) { // called each time file input changes
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();

          reader.readAsDataURL(event.target.files[0]); // read file as data url

          reader.onload = (event) => { // called once readAsDataURL is completed
            this.url = event.target?.result;
          }
        }
    }
  unosAutomoto = this.fb.group(
    {

        tabela:'',
        naziv:'',
        prva_slika:'',
        slike:'',
        automotoVrsta:'',
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
  podaci =
  {
        tabela:'automotopolja',
        prva_slika:'',
        slike:'',
        naziv:'sdads',
        automoto_vrsta:1,
        marka:'vds',
        model:'g2',
        cijena:'21',
        opis:'21',
        kontakt:'12',
        lokacija:'21',
        stanje:'32',
        kubikaza:'13',
        kilometraza:'13',
        godina_proizvodnje:'31',
        boja:'31',
        datum_isteka_registracije:'32'
  }
=======
  constructor() { }

  kategorija=''
>>>>>>> Stashed changes

  ngOnInit(): void {

  }

  test()
  {
<<<<<<< Updated upstream
    this.unosAutomoto.controls['automotoVrsta'].setValue(this.automotoVrsta);
    this.unosAutomoto.controls['tabela'].setValue('automotopolja');
    this.unosAutomoto.controls['prva_slika'].setValue(this.url);
    console.log(this.unosAutomoto.getRawValue());
    this.http.post('http://localhost:8000/api/addAsUser', this.unosAutomoto.getRawValue()).subscribe
    (res=>
      {
        alert("bravo")
      });
=======
    console.log(this.kategorija);
>>>>>>> Stashed changes

  }
}
