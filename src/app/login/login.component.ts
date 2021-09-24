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
  user_id:any;

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
          console.log(this.podaciLogovan)
            if(this.podaciLogovan.user.role == 1)
            {
              this.pocetna.logovan = true;
              this.pocetna.user = this.podaciLogovan.user_id;
              this.user_id = this.podaciLogovan.user.id;
              sessionStorage.setItem('token', JSON.stringify(this.podaciLogovan.data.token));
              this.router.navigate(['user-page/'+ this.user_id]);
            }else if(this.podaciLogovan.user.role == 2)
            {
              this.router.navigate(['admin-page']);
            }



        })

  }

}
