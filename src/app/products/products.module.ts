import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductOverviewComponent, ProductDetailsComponent],
  exports: [ProductOverviewComponent, ProductDetailsComponent]
})
export class ProductsModule { }
