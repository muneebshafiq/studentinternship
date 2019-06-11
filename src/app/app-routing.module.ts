import { GstLoginComponent } from './gst-login/gst-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { GstDetailsComponent } from './gst-details/gst-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'business/create',
    component: GstAddComponent
  },
  {
    path: 'business/edit/:id',
    component: GstEditComponent
  },
  {
    path: 'business',
    component: GstGetComponent
  },
  {
    path:'login',
    component: GstLoginComponent
  },
  {
    path:'details',
    component: GstDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
