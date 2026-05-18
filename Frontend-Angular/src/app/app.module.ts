import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProviderRegisterComponent } from './provider-register/provider-register.component';
import { LandingComponent } from './landing/landing.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { ProviderHomeComponent } from './provider-home/provider-home.component';
import { AddPackageComponent } from './add-package/add-package.component';
import { ProviderPackageComponent } from './provider-package/provider-package.component';
import { EditPackageComponent } from './edit-package/edit-package.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProviderRegisterComponent,
    LandingComponent,
    CustomerHomeComponent,
    ProviderHomeComponent,
    AddPackageComponent,
    ProviderPackageComponent,
    EditPackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
