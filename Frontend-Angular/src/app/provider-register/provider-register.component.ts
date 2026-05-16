import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-provider-register',
  templateUrl: './provider-register.component.html',
  styleUrls: ['./provider-register.component.scss']
})
export class ProviderRegisterComponent implements OnInit {
  district="";
  place="";
  phone="";
  username="";
  password="";
  company_name="";
  email="";

  constructor( private authService:AuthService ) { }

  ngOnInit(): void {
  }
  register_provider(){
    const data={
        district:this.district,
    place:this.place,
    phone:this.phone,
    username:this.username,
    password:this.password,
    company_name:this.company_name,
    email:this.email
    }
    this.authService.provider_register(data).subscribe((response)=>{
      console.log(response)
    })

  }

}
