import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';
import { AppRoutingModule } from "../app-routing.module";

@Component({
  selector: 'app-manage-stays',
  templateUrl: './manage-stays.component.html',
  styleUrls: ['./manage-stays.component.scss'],
})
export class ManageStaysComponent implements OnInit {

  constructor(private packageService:PackageService) { }
  stays:any;

  ngOnInit(): void {
    this.packageService.viewStaysProvider().subscribe((res)=>{
      this.stays=res;
    });
  }

  deleteStay(id:any){
    this.packageService.delecteStay(id).subscribe((res)=>{
      console.log(res);
      this.packageService.viewStaysProvider().subscribe((res)=>{
        this.stays=res;
      });
    });
  }
}
