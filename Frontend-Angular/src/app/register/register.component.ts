import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username="";
  email="";
  password="";
  place="";
  district="";
  phone="";
  

  constructor(private authService:AuthService ) { }

  ngOnInit(): void {
  }

  register_customer(){
    const data ={
      username:this.username,
      email:this.email,
      password:this.password,
      place:this.place,
      district:this.district,
      phone:this.phone,
    }
    console.log(data)
    this.authService.customer_register(data).subscribe((response=>{
      console.log(response)
    }))
  }

}
