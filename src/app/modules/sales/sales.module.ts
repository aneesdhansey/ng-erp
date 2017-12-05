import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersMasterComponent } from './components/customers/customers-master.component';
import { SalesordersMasterComponent } from './components/salesorders/salesorders-master.component';
import { SalesinvoicesMasterComponent } from './components/salesinvoices/salesinvoices-master.component';
import { ReceiptsMasterComponent } from './components/receipts/receipts-master.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomersMasterComponent, SalesordersMasterComponent, SalesinvoicesMasterComponent, ReceiptsMasterComponent],
  exports : [CustomersMasterComponent, SalesordersMasterComponent, SalesinvoicesMasterComponent, ReceiptsMasterComponent]
})
export class SalesModule { }
