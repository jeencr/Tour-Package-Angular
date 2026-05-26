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
import { PackageDetailsComponent } from './package-details/package-details.component';
import { PublicPackagesComponent } from './public-packages/public-packages.component';
import { FavoritePackagesComponent } from './favorite-packages/favorite-packages.component';
import { CustomerViewBookingComponent } from './customer-view-booking/customer-view-booking.component';
import { ProviderViewBookingComponent } from './provider-view-booking/provider-view-booking.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ManageDestinationsComponent } from './manage-destinations/manage-destinations.component';
import { ManageStaysComponent } from './manage-stays/manage-stays.component';
import { AddStaysComponent } from './add-stays/add-stays.component';
import { EditStayComponent } from './edit-stay/edit-stay.component';
import { AddImageStayComponent } from './add-image-stay/add-image-stay.component';
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
    EditPackageComponent,
    PackageDetailsComponent,
    PublicPackagesComponent,
    FavoritePackagesComponent,
    CustomerViewBookingComponent,
    ProviderViewBookingComponent,
    ManageDestinationsComponent,
    ManageStaysComponent,
    AddStaysComponent,
    EditStayComponent,
    AddImageStayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
