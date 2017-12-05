import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

//DASHBOARD MODULE
import { DashboardMainComponent } from './../modules/dashboard/components/dashboard-main/dashboard-main.component';

// INVENTORY MODULE
import { InventoryModule } from '../modules/inventory/inventory.module'
import { FaultyItemsMasterComponent } from '../modules/inventory/components/faultyitems/faulty-items-master.component'
import { StockItemsMasterComponent } from '../modules/inventory/components/stockitems/stock-items-master.component'
import { ShipmentsMasterComponent } from '../modules/inventory/components/shipments/shipments-master.component'

// PURCHASE MODULE
import { VendorsMasterComponent } from './../modules/purchase/components/vendors/vendors-master.component';
import { PurchaseorderMasterComponent } from './../modules/purchase/components/purchaseorders/purchaseorder-master.component';
import { PurchaseinvoicesMasterComponent } from './../modules/purchase/components/purchaseinvoices/purchaseinvoices-master.component';
import { PaymentsMasterComponent } from './../modules/purchase/components/payments/payments-master.component';

// SALES MODULE
import { CustomersMasterComponent } from './../modules/sales/components/customers/customers-master.component';
import { SalesordersMasterComponent } from './../modules/sales/components/salesorders/salesorders-master.component';
import { SalesinvoicesMasterComponent } from './../modules/sales/components/salesinvoices/salesinvoices-master.component';
import { ReceiptsMasterComponent } from './../modules/sales/components/receipts/receipts-master.component';

// ACCOUNTS MODULE
import { ChartofaccountsMasterComponent } from './../modules/accounts/components/chartofaccounts/chartofaccounts-master.component';
import { AccountbalancesMasterComponent } from './../modules/accounts/components/accountbalances/accountbalances-master.component';

// HUMAN RESOURCES MODULE
import { EmployeesMasterComponent } from './../modules/humanresources/components/employees/employees-master.component';
import { CoursesMasterComponent } from './../modules/humanresources/components/courses/courses-master.component';

// ADMINISTRATION MODULE
import { UsersMasterComponent } from './../modules/administration/components/users/users-master.component';
import { MenuconfigMasterComponent } from './../modules/administration/components/menuconfigurations/menuconfig-master.component';
import { TenantsettingsMasterComponent } from './../modules/administration/components/tenantsettings/tenantsettings-master.component';

const appRoutes = [
  { path: 'dashboard', component: DashboardMainComponent },
  { path  : 'inventory/stockitems', component : StockItemsMasterComponent },
  { path  : 'inventory/faultyitems', component : FaultyItemsMasterComponent },
  { path  : 'inventory/shipments', component : ShipmentsMasterComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
