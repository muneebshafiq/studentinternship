import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';
import Details from '../Details';


@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;
  detail: Details[];
  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.angForm = this.fb.group({
          person_name: ['', Validators.required ],
          business_name: ['', Validators.required ],
          business_gst_number: ['', Validators.required ],
          user_password: ['', Validators.required ]
        });
      }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.business = res;
    });
  });
  }

  getData(person_name)
  {
    console.log(person_name)
    if(this.detail.find(x=>x.first_name==person_name))
    {
      
      this.detail.find(x=>x.first_name==person_name )
      console.log()
    }
  }

  updateBusiness(person_name, business_name, business_gst_number, user_password) {
    console.log("After Update click")
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(person_name, business_name, business_gst_number, user_password , params['id']);
       this.router.navigate(['business']);
 });
}

}
