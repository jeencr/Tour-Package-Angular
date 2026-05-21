import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';
import { ActivatedRoute } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss'],
})
export class PackageDetailsComponent implements OnInit {

  constructor(private packageService:PackageService,private activatedRoute:ActivatedRoute) { }

  packageId:any;
  role:any;
  

  packageData:any;
  ngOnInit(): void {
    this.packageId = this.activatedRoute.snapshot.paramMap.get('id')

    if(localStorage.getItem('group')=='Provider'){
    this.packageService.get_single_package(this.packageId).subscribe((res)=>{
      this.packageData = res;

    })
  }
  else{
     this.packageService.get_single_package_public(this.packageId).subscribe((res)=>{
      this.packageData = res;

    })

  }
    this.role= localStorage.getItem('group')
    console.log(this.role)


  }

  today = Date.now()

  quantity:any;
  tour_date:any;
  data:any;
getTotalAmount(){
  if(!this.packageData.amount || !this.quantity){
    return 0
  }
  return (this.packageData.amount*this.quantity)
}  

bookPackage(){
  this.data = {
    quantity:this.quantity,
    tour_date:this.tour_date,
    total_amount:this.getTotalAmount(),
    package:this.packageData.id
  }
    this.packageService.book_package(this.data).subscribe((res)=>{
      console.log(res)
    })

}
}
