import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProviderRegisterComponent } from './provider-register/provider-register.component';
import { LandingComponent } from './landing/landing.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { ProviderHomeComponent } from './provider-home/provider-home.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'provider-register',component:ProviderRegisterComponent},
  {path:'customer-home',component:CustomerHomeComponent},
  {path:'provider-home',component:ProviderHomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
