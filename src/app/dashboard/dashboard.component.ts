import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../common/services/facade.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  content:string;
  constructor(private facadeService: FacadeService) { }

  ngOnInit() {
    this.content = this.facadeService.getDashboardContent();
  }

}
