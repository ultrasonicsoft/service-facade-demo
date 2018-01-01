import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  constructor() { }

  getOrderList(){
    return 'returning order list from account service';
  }

  getAddress(){
    return 'returning address from account service'
  }
}
