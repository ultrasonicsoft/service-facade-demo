import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../common/services/facade.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderList:string; 
  
  constructor(private facadeService: FacadeService) { }

  ngOnInit() {
    this.orderList = this.facadeService.getOrderList();
  }
}
