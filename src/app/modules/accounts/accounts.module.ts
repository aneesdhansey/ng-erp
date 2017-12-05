import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartofaccountsMasterComponent } from './components/chartofaccounts/chartofaccounts-master.component';
import { AccountbalancesMasterComponent } from './components/accountbalances/accountbalances-master.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChartofaccountsMasterComponent, AccountbalancesMasterComponent],
  exports : [ChartofaccountsMasterComponent, AccountbalancesMasterComponent]
})
export class AccountsModule { }
