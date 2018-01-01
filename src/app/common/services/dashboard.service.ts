import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  constructor() { }

  getDashboardContent(){
    return 'returning dashbaord content from Dashboard Service'
  }
}
