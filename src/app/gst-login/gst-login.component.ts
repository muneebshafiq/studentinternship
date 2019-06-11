import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';
import Business from '../Business';

@Component({
  selector: 'app-gst-login',
  templateUrl: './gst-login.component.html',
  styleUrls: ['./gst-login.component.css']
})
export class GstLoginComponent implements OnInit {

  angForm: FormGroup;
  students: Business[];
  y;
  constructor(private fb: FormBuilder, private bs: BusinessService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      business_name: ['', Validators.required ],
      user_password: ['', Validators.required ]
    });
  }

  check_user(email, password)
  {
    if(email=="web2019" && password=="2019web")
    {
      console.log("Admin Success");
      this.router.navigate(['business']);
    }
    else if(this.students.find(x=>x.business_name==email && x.user_password==password))
    {
      console.log("Success");
      this.router.navigate(['details']);
      
    }
    else{
      console.log("Failed");
      alert("Wrong Email/Password");
    }
  }

  gotoRegister()
  {
    this.router.navigate(['business/create']);
  }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Business[]) => {
        this.students = data;
    });
  }

}
