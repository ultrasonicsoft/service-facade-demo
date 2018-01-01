import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../common/services/facade.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetail:string;

  constructor(private facadeService:FacadeService) { }

  ngOnInit() {
    this.productDetail = this.facadeService.getProductDetails();
  }

}
