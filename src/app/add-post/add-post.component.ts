
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';



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






  ngOnInit(): void {

  }


  test()
  {
    var  header = new HttpHeaders();
    header.append('Access-Control-Allow-Origin', 'http://localhost:8000');
    header.append('Access-Control-Allow-Credentials', 'true');

    this.unosAutomoto.controls['automoto_vrsta'].setValue(1);
    this.unosAutomoto.controls['tabela'].setValue('automotopolja');
    this.unosAutomoto.controls['prva_slika'].setValue(this.url);
    console.log(this.unosAutomoto.getRawValue());
    this.http.post('http://localhost:8000/api/addAsUser', this.unosAutomoto.getRawValue(),{headers:header})

    console.log(this.kategorija);


  }
}
