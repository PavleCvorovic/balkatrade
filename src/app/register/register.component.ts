import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient, private fb:FormBuilder) { }

  unosRegister = this.fb.group(
    {
      name:'',
      email:'',
      username:'',
      password:''
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

        })
  }

}
