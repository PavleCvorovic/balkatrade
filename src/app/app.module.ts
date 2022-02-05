import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './products/filter/filter.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import { UserComponent } from './user/user.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RandomProduktiComponent } from './random-produkti/random-produkti.component';
import { NavbarComponent } from './navbar/navbar.component';
 import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductsComponent,
    FilterComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AddPostComponent,
    AdminPageComponent,
    UserPageComponent,
    RandomProduktiComponent,
    NavbarComponent,



  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxSliderModule,
        FormsModule,
        ReactiveFormsModule,
      NgxPaginationModule
    ],
  providers: [ HttpClient, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
