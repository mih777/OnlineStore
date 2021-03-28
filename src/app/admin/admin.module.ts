import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [AdminLoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'admin-login', component: AdminLoginComponent },
      { path: 'dashboard', component: DashboardComponent }
    ])
  ]
})
export class AdminModule { }
