import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  login(data:any){
    return this.http.post(`${environment.baseUrl}/users/login/`,data)
  }

  getProfile(){
    const token = localStorage.getItem('access')
    const headers  = {Authorization:`Bearer ${token}`}
    return this.http.get(`${environment.baseUrl}/users/user_profile/`,{headers})
  }
}
