import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username="";
  password="";

  constructor(private authServices:AuthService) {

    
   }

  ngOnInit(): void {
  }

  login(){
    const data = {
      'username':this.username,
      'password':this.password,
    }

    this.authServices.login(data).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem('access',response.access)
      localStorage.setItem('refresh',response.refresh)
      console.log('token saved')
    })
    console.log(this.username);
    console.log(this.password);

  }

  getProfile(){
    const token = localStorage.getItem('access');
    const headers = {
      'Authorization':`Bearer ${token}`
    }
    this.authServices.getProfile().subscribe((response)=>{
      console.log(response)
    })
  }

}
