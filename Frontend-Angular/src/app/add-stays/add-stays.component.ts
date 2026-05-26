import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-add-stays',
  templateUrl: './add-stays.component.html',
  styleUrls: ['./add-stays.component.scss']
})
export class AddStaysComponent implements OnInit {

  constructor(private packageService:PackageService) { }
destinations:any;
  ngOnInit(): void {
    this.packageService.getProviderDestinations().subscribe((response)=>{
      this.destinations = response;
    });
  }

  destination = "";
  stay_name = "";
  max_people = "";
  amount_per_night = "";
  addStay(){
    const data = {
      stay_name:this.stay_name,
      destination:this.destination,
      max_people:this.max_people,
      amount_per_night:this.amount_per_night
    }
    console.log(data);
    this.packageService.addStays(data).subscribe((response)=>{
      console.log(response);
    });
  }

}
