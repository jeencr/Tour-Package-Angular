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


  }

}
