import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-public-packages',
  templateUrl: './public-packages.component.html',
  styleUrls: ['./public-packages.component.scss']
})
export class PublicPackagesComponent implements OnInit {

  constructor(private packageService:PackageService) {

   }
packages:any=[]
  ngOnInit(): void {
    this.packageService.getPublicPackages().subscribe((res)=>{
      this.packages = res;
    })

  }


}
