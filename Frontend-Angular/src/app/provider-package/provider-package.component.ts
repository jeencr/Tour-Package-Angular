import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-provider-package',
  templateUrl: './provider-package.component.html',
  styleUrls: ['./provider-package.component.scss']
})
export class ProviderPackageComponent implements OnInit {




  constructor(private packageService:PackageService) { }

  selectedImage:any;
  
  selectImage( event:any){
    this.selectImage = event.target.files[0]
    console.log(this.selectImage)
  }

  uploadImage(id:any){
    this.packageService.uploadPackageImage(id,this.selectImage).subscribe((res)=>{
      console.log(res)
    })

  }

  packages:any;
  ngOnInit(): void {
    this.packageService.get_my_packages().subscribe((response)=>{
      this.packages = response;
      console.log(this.packages)
      })

  }

 
  deletePackage(id:any){
    this.packageService.delete_package(id).subscribe((response)=>{
      console.log(response)
    this.ngOnInit()

    })
  }

  editPackage(id:any){}

}
