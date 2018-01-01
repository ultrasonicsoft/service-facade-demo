import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../common/services/facade.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  address:string;
  constructor(private facadeService: FacadeService) { }

  ngOnInit() {
    this.address = this.facadeService.getAddress();
  }

}
