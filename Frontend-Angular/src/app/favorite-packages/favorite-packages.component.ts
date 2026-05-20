import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-favorite-packages',
  templateUrl: './favorite-packages.component.html',
  styleUrls: ['./favorite-packages.component.scss']
})
export class FavoritePackagesComponent implements OnInit {

  constructor(private packageService:PackageService) { }

  ngOnInit(): void {

    this.getFavoritePackages()
  }

  fav_packages :any

  getFavoritePackages(){
    this.packageService.get_fav_packages().subscribe((res)=>{
      this.fav_packages = res
      console.log(this.fav_packages)
    })
  }
}
