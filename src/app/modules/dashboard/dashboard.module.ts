import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardMainComponent],
  exports : [DashboardMainComponent]
})
export class DashboardModule { }
