import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number, user_password) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number,
      user_password: user_password
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  addDetails(first_name, last_name, age, gender, DOB, CNIC, picture, skills, activities, achievements, exprience ) {
    const obj = {
      first_name: first_name,
      last_name: last_name,
      age: age,
      gender: gender,
      DOB: DOB, 
      CNIC: CNIC, 
      picture: picture, 
      skills: skills, 
      activities: activities, 
      achievements: achievements, 
      exprience: exprience

    };
    console.log(obj);
    this.http.post(`${this.uri}/addDetails`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }
  
  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

    updateBusiness(person_name, business_name, business_gst_number, user_password , id) {
      console.log("In Service Update Business")
      const obj = {
          person_name: person_name,
          business_name: business_name,
          business_gst_number: business_gst_number,
          user_password: user_password,
        };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    deleteBusiness(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
    }

}
