import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrdersComponent, AddressComponent],
  exports: [OrdersComponent, AddressComponent]
})
export class AccountModule { }
