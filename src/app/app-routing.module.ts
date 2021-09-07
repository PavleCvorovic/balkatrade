import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddPostComponent } from './add-post/add-post.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'homepage', component:HomepageComponent},
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'add', component:AddPostComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
