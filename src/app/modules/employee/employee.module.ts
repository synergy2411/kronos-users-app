import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';



@NgModule({
  declarations: [NewEmployeeComponent],
  imports: [
    CommonModule // Applicable for all features Module
    // Wrapper for BrowserModule - only for Root Module
  ],
  exports :   [NewEmployeeComponent]
})
export class EmployeeModule { }
