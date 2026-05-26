import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-stay',
  templateUrl: './edit-stay.component.html',
  styleUrls: ['./edit-stay.component.scss']
})
export class EditStayComponent implements OnInit {

  constructor(private packageService:PackageService,private activatedRoute:ActivatedRoute) { }

  stayId:any;
  destinations:any;


  ngOnInit(): void {
    this.stayId = this.activatedRoute.snapshot.params['id'];
    console.log(this.stayId);
    this.getStayDetails();
    this.packageService.getProviderDestinations().subscribe((response)=>{
      this.destinations = response;
      console.log(this.destinations,"destinations");
    });
  }

  stay_details:any;
    stay_name:any;
  destination:any;
  max_people:any;
  amount_per_night:any;
  getStayDetails(){
    this.packageService.getSingleStay(this.stayId).subscribe((response)=>{
      this.stay_details = response;
      console.log(response);
      this.stay_name = this.stay_details.stay_name;
      this.destination = Number(this.stay_details.destination_id);
      this.max_people = this.stay_details.max_people;
      this.amount_per_night = this.stay_details.amount_per_night;
    });
  }


  
  updateStay(){
    const data = {
      stay_name:this.stay_name,
      destination:this.destination,
      max_people:this.max_people,
      amount_per_night:this.amount_per_night
    }
    console.log(data);
    this.packageService.updateStay(this.stayId,data).subscribe((response)=>{
      console.log(response);
    });
  }
}
