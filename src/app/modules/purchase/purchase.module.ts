import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsMasterComponent } from './components/vendors/vendors-master.component';
import { PurchaseorderMasterComponent } from './components/purchaseorders/purchaseorder-master.component';
import { PurchaseinvoicesMasterComponent } from './components/purchaseinvoices/purchaseinvoices-master.component';
import { PaymentsMasterComponent } from './components/payments/payments-master.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VendorsMasterComponent, PurchaseorderMasterComponent, PurchaseinvoicesMasterComponent, PaymentsMasterComponent],
  exports : [VendorsMasterComponent, PurchaseorderMasterComponent, PurchaseinvoicesMasterComponent, PaymentsMasterComponent]
})
export class PurchaseModule { }
