import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { }

  getProductDetails(){
    return 'returning product details from Product Service'
  }

  getProductOverview(){
    return 'returning product overview from Product Service'
  }
}
