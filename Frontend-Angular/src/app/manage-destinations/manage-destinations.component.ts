import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-manage-destinations',
  templateUrl: './manage-destinations.component.html',
  styleUrls: ['./manage-destinations.component.scss']
})
export class ManageDestinationsComponent implements OnInit {

  constructor(private packageService:PackageService) { }

  destinations :any;
destination="";
providerDestination:any
amount=0;
  ngOnInit(): void {
    this.packageService.get_destinations().subscribe((res)=>{
      this.destinations = res
      console.log(this.destinations)
    })

    this.packageService.getProviderDestinations().subscribe((res)=>{
      this.providerDestination = res;
      console.log(this.providerDestination)
    })

  }
  data:any;

  addDestination(){
    this.data = {
      'amount':this.amount,
      'destination':this.destination,
      
    }
    this.packageService.addProviderDestinations(this.data).subscribe((res)=>{
      console.log(res);
    })
  }

    selectImage( event:any){
    this.selectImage = event.target.files[0]
    console.log(this.selectImage)
  }

  uploadImage(id:any){
    this.packageService.uploadDestinationImage(id,this.selectImage).subscribe((res)=>{
      console.log(res)
    })

  }

}
