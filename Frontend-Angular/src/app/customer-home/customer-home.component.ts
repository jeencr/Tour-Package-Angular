import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  constructor(private packageService:PackageService) { }

packages:any=[]
  ngOnInit(): void {
    this.packageService.getPublicPackages().subscribe((res)=>{
      this.packages = res;
      console.log(this.packages)
    })

  }

  data:any
  addFavorite(id:any){
    this.data = {'package':id}
    this.packageService.addFavoritePackage(this.data).subscribe((res)=>{
      console.log(res)
    })

  }

}
