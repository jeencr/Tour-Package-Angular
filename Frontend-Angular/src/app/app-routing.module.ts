import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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
import { ManageDestinationsComponent } from './manage-destinations/manage-destinations.component';
import { ManageStaysComponent } from './manage-stays/manage-stays.component';
import { AddStaysComponent } from './add-stays/add-stays.component';
import { EditStayComponent } from './edit-stay/edit-stay.component';
import { AddImageStayComponent } from './add-image-stay/add-image-stay.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'provider-register',component:ProviderRegisterComponent},
  {path:'customer-home',component:CustomerHomeComponent},
  {path:'provider-home',component:ProviderHomeComponent},
  {path:'add-package',component:AddPackageComponent},
  {path:'provider-package',component:ProviderPackageComponent},
  {path:'edit-package/:id',component:EditPackageComponent},
  {path:'package-details/:id',component:PackageDetailsComponent},
  {path:'public-packages',component:PublicPackagesComponent},
  {path:'favorite-packages',component:FavoritePackagesComponent},
  {path:'customer-booking',component:CustomerViewBookingComponent},
  {path:'provider-booking',component:ProviderViewBookingComponent},
  {path:'manage-destinations',component:ManageDestinationsComponent},
  {path:'manage-stays',component:ManageStaysComponent},
  {path:'add-stays',component:AddStaysComponent},
  {path:'edit-stays/:id',component:EditStayComponent},
  {path:'add-image-stays/:id',component:AddImageStayComponent},

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
