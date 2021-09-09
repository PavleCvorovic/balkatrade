import { PocetnaService } from './../pocetna.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private http:HttpClient, private pocetna:PocetnaService, private router:Router) { }

  ngOnInit(): void {
  }

  unosLogin= this.fb.group
  (
    {
      email:'',
      password:''
    }
  )
  podaciLogovan:any;
  submit()
  {
      this.http.post("http://localhost:8000/api/login", this.unosLogin.getRawValue())
      .subscribe(res=>
        {
            this.podaciLogovan = res;
            if(this.podaciLogovan.user.role == 1)
            {
              this.pocetna.logovan = true;
              this.router.navigate(['homepage']);
            }else if(this.podaciLogovan.user.role == 2)
            {
              this.router.navigate(['admin-page']);
            }



        })

  }

}
