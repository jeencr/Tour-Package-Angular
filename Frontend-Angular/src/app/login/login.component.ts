import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username="";
  password="";

  constructor(
    private authServices:AuthService,
    private router:Router
  ) {

    
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

       this.authServices.getProfile().subscribe((response:any)=>{
      if(response.group=='Provider'){
        this.router.navigate([
          '/provider-home'
        ])
      }
      else if(response.group=='Customer'){
        this.router.navigate([
          '/customer-home'
        ])
      }
    })

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
