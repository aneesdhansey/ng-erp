import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaultyItemsMasterComponent } from './components/faultyitems/faulty-items-master.component';
import { StockItemsMasterComponent } from './components/stockitems/stock-items-master.component';
import { ShipmentsMasterComponent } from './components/shipments/shipments-master.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FaultyItemsMasterComponent, StockItemsMasterComponent, ShipmentsMasterComponent],
  exports : [FaultyItemsMasterComponent, StockItemsMasterComponent, ShipmentsMasterComponent]
})
export class InventoryModule { }
