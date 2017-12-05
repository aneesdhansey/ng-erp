import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module'

import {SuiModule} from 'ng2-semantic-ui';

import { AppComponent } from './app.component';

import { DashboardModule } from './modules/dashboard/dashboard.module'
import { InventoryModule } from './modules/inventory/inventory.module';
import { PurchaseModule } from './modules/purchase/purchase.module';
import { SalesModule } from './modules/sales/sales.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { HumanresourcesModule } from './modules/humanresources/humanresources.module';
import { AdministrationModule } from './modules/administration/administration.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    AppRoutingModule,
    DashboardModule,
    InventoryModule,
    PurchaseModule,
    SalesModule,
    AccountsModule,
    HumanresourcesModule,
    AdministrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
