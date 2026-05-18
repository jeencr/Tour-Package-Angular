import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss'],
})
export class AddPackageComponent implements OnInit {

  category = ""
  destination = "";
  package_name = "";
  description  = "";
  amount = "";
  no_of_days = "";
  no_of_nights = "";
  no_of_adults = "";
  no_of_children ="";

  destinations:any;
  categories:any;


  constructor(private packageService:PackageService) { }

  ngOnInit(): void {
    this.packageService.get_categories().subscribe((response)=>{
      this.categories = response;
      console.log(this.categories)
    })

    
    this.packageService.get_destinations().subscribe((response)=>{
      this.destinations = response;
      console.log(this.destinations)
    })
  }

 addPackage(){

  const data = {

    category:this.category,

    destination:this.destination,

    package_name:this.package_name,

    description:this.description,

    amount:this.amount,

    no_of_days:this.no_of_days,

    no_of_nights:this.no_of_nights,

    no_of_adults:this.no_of_adults,

    no_of_children:this.no_of_children

  }

  console.log(data)

  this.packageService.create_package(data)
  .subscribe((response)=>{

    console.log(response)

  })

}

}
