import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

    
  constructor(  private http:HttpClient  ) { }

  create_package(data:any){
    const token = localStorage.getItem('access')
    const headers = {
      Authorization :`Bearer ${token}`
    }
    return this.http.post(`${environment.baseUrl}/packages/create_package/`,data,{headers})

  }

  get_categories(){
    return this.http.get(`${environment.baseUrl}/packages/categories_list`)
  }

  
  get_destinations(){
    return this.http.get(`${environment.baseUrl}/packages/destinations_lists`)
  }

  get_my_packages(){
    const token = localStorage.getItem('access')
    const headers = {Authorization:`Bearer ${token}`}
    return this.http.get(`${environment.baseUrl}/packages/provider_packages`,{headers})
  }

  delete_package(id:Number){
    const token = localStorage.getItem('access')
    const headers = {Authorization:`Bearer ${token}`}
    return this.http.delete(`${environment.baseUrl}/packages/delete_package/${id}/`,{headers})
  }


  get_single_package(id:Number){
    const token = localStorage.getItem('access')
    const headers = {
      Authorization : `Bearer ${token}`

    }
    return this.http.get(`${environment.baseUrl}/packages/single_package/${id}/`,{headers})
  }
}
