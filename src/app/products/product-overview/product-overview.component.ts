import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../common/services/facade.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

  productOverview:string;

  constructor(private facadeService:FacadeService) { }

  ngOnInit() {
    this.productOverview = this.facadeService.getProductOverview();
  }

}
