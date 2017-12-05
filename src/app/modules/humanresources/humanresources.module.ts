import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesMasterComponent } from './components/employees/employees-master.component';
import { CoursesMasterComponent } from './components/courses/courses-master.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeesMasterComponent, CoursesMasterComponent],
  exports : [EmployeesMasterComponent, CoursesMasterComponent]
})
export class HumanresourcesModule { }
