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


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxSliderModule,
        FormsModule
    ],
  providers: [ HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
