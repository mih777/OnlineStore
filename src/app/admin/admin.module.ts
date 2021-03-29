import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [AdminLoginComponent, DashboardComponent],
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    QuillModule.forRoot(),
    RouterModule.forChild([
      { path: 'admin-login', component: AdminLoginComponent },
      { path: 'dashboard', component: DashboardComponent }
    ])
  ]
})
export class AdminModule { }
