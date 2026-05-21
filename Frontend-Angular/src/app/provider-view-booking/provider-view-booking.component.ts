import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-provider-view-booking',
  templateUrl: './provider-view-booking.component.html',
  styleUrls: ['./provider-view-booking.component.scss']
})
export class ProviderViewBookingComponent implements OnInit {

  constructor(private packageService:PackageService) { }

  bookings:any;

  ngOnInit(): void {

    this.packageService.get_packags_providers().subscribe((res)=>{
      this.bookings=res;
    })

  }

  updateStatus(id:any,status:any){

    this.packageService.updateStatusBooking(id,{'status':status}).subscribe((res)=>{
      console.log(res);
    })


  }

}
