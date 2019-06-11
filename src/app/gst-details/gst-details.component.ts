import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-details',
  templateUrl: './gst-details.component.html',
  styleUrls: ['./gst-details.component.css']
})
export class GstDetailsComponent implements OnInit {

  constructor(private bs: BusinessService) { }

  ngOnInit() {
  }

  addDetails(first_name, last_name, age, gender, DOB, CNIC, picture, skills, activities, achievements, exprience ) {
    if(first_name=="")
    {
      alert("Please fill the infromation")
    }
    else{
      this.bs.addDetails(first_name, last_name, age, gender, DOB, CNIC, picture, skills, activities, achievements, exprience )
      alert("Details successfully added in database")
    }
   
  }

}
