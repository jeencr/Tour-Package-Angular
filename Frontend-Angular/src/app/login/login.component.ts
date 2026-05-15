import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username="";
  password="";

  constructor(private http:HttpClient) {
    
   }

  ngOnInit(): void {
  }

  login(){
    const data = {
      'username':this.username,
      'password':this.password,
    }

    this.http.post(`${environment.baseUrl}/users/login/`,data).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem('access',response.access)
      localStorage.setItem('refresh',response.refresh)
      console.log('token saved')
    })
    console.log(this.username);
    console.log(this.password);

  }

}
