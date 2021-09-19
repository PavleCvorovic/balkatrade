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

  submit()
  {
    this.http.post("http://localhost:8000/api/register", this.unosRegister.getRawValue())
      .subscribe(res=>
        {
          console.log("registrovan");
          alert("Uspjesno ste se registrovali, sada se mozete ulogovati na svoj nalog!");
          this.router.navigate(['../login'])


        })
  }

}
