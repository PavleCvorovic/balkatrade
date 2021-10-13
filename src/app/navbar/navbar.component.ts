import { PocetnaService } from './../pocetna.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private servis:PocetnaService) { }


  user = this.servis.user;
  ngOnInit(): void {
    if(sessionStorage.getItem('token'))
    {
        this.servis.user = sessionStorage.getItem('token');
        this.user = this.servis.user;
    }
  }

  logout()
  {
    sessionStorage.clear();
    this.servis.user = 0;
    this.router.navigate(['../../login'])
  }

}
