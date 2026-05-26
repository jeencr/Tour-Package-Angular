import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-image-stay',
  templateUrl: './add-image-stay.component.html',
  styleUrls: ['./add-image-stay.component.scss']
})
export class AddImageStayComponent implements OnInit {

  constructor(private packageService:PackageService,private activatedRoute:ActivatedRoute) { }

  images:any ;
  stayId:any;

  ngOnInit(): void {
    this.stayId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.stayId);
    this.packageService.viewStayImages(this.stayId).subscribe((response)=>{
      this.images = response;
      console.log(this.images);
    })
  }

      selectImage( event:any){
    this.selectImage = event.target.files[0]
    console.log(this.selectImage)
  }

  uploadImage(id:any){
    this.packageService.addStayImages(id,this.selectImage).subscribe((res)=>{
      console.log(res)
    })
    this.ngOnInit();

  }
  deleteImage(id:any){
    this.packageService.deleteStayImage(id).subscribe((res)=>{
      console.log(res);
    })
  }

}
