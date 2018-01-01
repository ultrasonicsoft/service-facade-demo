import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../common/services/facade.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  isSignedUp:boolean;

  constructor(private facadeService: FacadeService) { }

  ngOnInit() {
    this.isSignedUp = this.facadeService.isSignedUp();
  }

}
