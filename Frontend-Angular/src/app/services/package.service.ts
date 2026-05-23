import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  constructor(private http: HttpClient) {}

  create_package(data: any) {
    const token = localStorage.getItem('access');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post(
      `${environment.baseUrl}/packages/create_package/`,
      data,
      { headers },
    );
  }

  get_categories() {
    return this.http.get(`${environment.baseUrl}/packages/categories_list`);
  }

  get_destinations() {
    return this.http.get(`${environment.baseUrl}/packages/destinations_lists`);
  }

  get_my_packages() {
    const token = localStorage.getItem('access');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(`${environment.baseUrl}/packages/provider_packages`, {
      headers,
    });
  }

  delete_package(id: Number) {
    const token = localStorage.getItem('access');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete(
      `${environment.baseUrl}/packages/delete_package/${id}/`,
      { headers },
    );
  }

  get_single_package(id: Number) {
    const token = localStorage.getItem('access');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.get(
      `${environment.baseUrl}/packages/single_package/${id}/`,
      { headers },
    );
  }
  
  

  get_single_package_public(id: Number) {
    const token = localStorage.getItem('access');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.get(
      `${environment.baseUrl}/packages/public_single_package/${id}/`,
      { headers },
    );
  }
  


  updatePackage(id: any, data: any) {
    const token = localStorage.getItem('access');

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return this.http.put(
      `${environment.baseUrl}/packages/update_package/${id}/`,

      data,

      { headers },
    );
  }

  uploadPackageImage(packageId:any,image:any){

      const token = localStorage.getItem('access');

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const formdata = new FormData()

    formdata.append('package',packageId)
    formdata.append('image',image)

    return this.http.post(`${environment.baseUrl}/packages/upload_images_packages/`,formdata,{headers})
    
  }

  getPublicPackages(){
    return this.http.get(`${environment.baseUrl}/packages/public_packages/`)
  }

  addFavoritePackage(data:any){
    const token = localStorage.getItem('access');

    const headers = {
      Authorization: `Bearer ${token}`,
    };
   
    

    return this.http.post(`${environment.baseUrl}/packages/add_favorite/`,data,{headers})
  }

    get_fav_packages() {
    const token = localStorage.getItem('access');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.get(
      `${environment.baseUrl}/packages/view_favorites/`,
      { headers },
    );
  }

  book_package(data:any){
        const token = localStorage.getItem('access');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post(
      `${environment.baseUrl}/packages/create_booking/`,data,
      { headers },
    );

  }


      get_customer_booked_packages() {
    const token = localStorage.getItem('access');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.get(
      `${environment.baseUrl}/packages/view_booking_customer/`,
      { headers },
    );
  }

  get_packags_providers() {
    const token = localStorage.getItem('access');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.get(
      `${environment.baseUrl}/packages/view_booking_provider/`,
      { headers },
    );
  }

    updateStatusBooking(id: any, data: any) {
    const token = localStorage.getItem('access');

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return this.http.put(
      `${environment.baseUrl}/packages/update_status_booking/${id}/`,

      data,

      { headers },
    );
  }

  addPackageReview(data:any){

    const token = localStorage.getItem('access');
    
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post(
      `${environment.baseUrl}/packages/add_package_review/`,data,
      { headers },
    );

  }

  getPackageReviews(id:any){
      return this.http.get(
      `${environment.baseUrl}/packages/package_reviews/${id}/`,
    );

  }

}
