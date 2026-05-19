import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-package',
  templateUrl: './edit-package.component.html',
  styleUrls: ['./edit-package.component.scss']
})
export class EditPackageComponent implements OnInit {

    destinations:any;
  categories:any;

  category = ""
  destination = ""

  package_name = ""
  description = ""

  amount = ""

  no_of_days = ""
  no_of_nights = ""

  no_of_adults = ""
  no_of_children = ""

  package_id:any

  constructor(private packageService:PackageService,private a: ActivatedRoute) { }

  ngOnInit(): void {

        this.packageService.get_categories().subscribe((response)=>{
      this.categories = response;
      console.log(this.categories)
    })

    
    this.packageService.get_destinations().subscribe((response)=>{
      this.destinations = response;
      console.log(this.destinations)
    })

    this.package_id = this.a.snapshot.paramMap.get('id')
    console.log(`pid: ${this.package_id}`)

    this.packageService.get_single_package(this.package_id).subscribe((response:any)=>{

      this.category=response.category;
      this.destination=response.destination;
      this.package_name=response.package_name;
      this.description=response.description;
      this.amount=response.amount;
      this.no_of_days=response.no_of_days;
      this.no_of_nights=response.no_of_nights;
      this.no_of_adults=response.no_of_adults;
      this.no_of_children=response.no_of_children;
    })
  }


  updatePackage(){
    console.log("button clicked")

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

  this.packageService
  .updatePackage(
    this.package_id,
    data
  )
  .subscribe((response)=>{

    console.log(response)

  })

}
}
