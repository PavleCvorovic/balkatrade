import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient, private fb:FormBuilder, private router:Router) { }

  unosRegister = this.fb.group(
    {
      name:'',
      email:'',
      password:'',
      role:1
    }
  )

  ngOnInit(): void {
  }
  sub:boolean=false;
verifikuj(){
  this.http.post("https://balkazon.me/Balkatrade/api/sendbasicemail",this.unosRegister.getRawValue()).subscribe(
    res=>{
      var odgovor0:any
      odgovor0=res;
if (odgovor0.status===1){
  alert(odgovor0.message)
}
else if(odgovor0.status===2) {
  alert(odgovor0.message)
}
else if (odgovor0.status===3){
        alert(odgovor0.message)
      }
else if (odgovor0.status===4) {
  alert('Na vašu email adresu proslijedjen je verifikacioni kod ')
  this.sub=true;
}
    } )
}
kod:string='';
  submit() {
   var kod="BORO"
    console.log(this.kod.length)
  if ( this.kod.length==16 && this.kod.includes(kod)){
  this.http.post("https://balkazon.me/Balkatrade/api/register", this.unosRegister.getRawValue())
.subscribe(res => {
  var odgovor: any = {
    code: '',
    message: '',
    status: ''
  }
  odgovor = res;

  alert(odgovor.message);
  this.router.navigate(['../login'])


})}
  else{



  }
}}

