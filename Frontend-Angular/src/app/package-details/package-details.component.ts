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
  

  packageData:any;
  ngOnInit(): void {
    this.packageId = this.activatedRoute.snapshot.paramMap.get('id')
    this.packageService.get_single_package(this.packageId).subscribe((res)=>{
      this.packageData = res;
    })


  }

}
