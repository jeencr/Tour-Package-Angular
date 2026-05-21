import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-customer-view-booking',
  templateUrl: './customer-view-booking.component.html',
  styleUrls: ['./customer-view-booking.component.scss']
})
export class CustomerViewBookingComponent implements OnInit {

  constructor(private packageService:PackageService) { }

  bookings:any;

  ngOnInit(): void {

    this.packageService.get_customer_booked_packages().subscribe((res)=>{
      this.bookings = res;

      console.log(this.bookings);
    })


  }

}
