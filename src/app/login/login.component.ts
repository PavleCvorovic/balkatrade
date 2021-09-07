import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
  }

  unosLogin= this.fb.group
  (
    {
      email:'',
      password:''
    }
  )


  submit()
  {
      this.http.post("http://localhost:8000/api/login", this.unosLogin.getRawValue())
      .subscribe(res=>
        {
          console.log("logovan");

        })

  }

}
