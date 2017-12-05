import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersMasterComponent } from './components/users/users-master.component';
import { MenuconfigMasterComponent } from './components/menuconfigurations/menuconfig-master.component';
import { TenantsettingsMasterComponent } from './components/tenantsettings/tenantsettings-master.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersMasterComponent, MenuconfigMasterComponent, TenantsettingsMasterComponent],
  exports : [UsersMasterComponent, MenuconfigMasterComponent, TenantsettingsMasterComponent]
})
export class AdministrationModule { }
