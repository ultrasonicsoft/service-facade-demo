import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from './account.service';
import { DashboardService } from './dashboard.service';
import { LoginService } from './login.service';
import { ProductsService } from './products.service';
import { SignUpService } from './sign-up.service';
import { FacadeService } from './facade.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    AccountService,
    DashboardService,
    LoginService,
    ProductsService,
    SignUpService,
    
    FacadeService
  ]
})
export class ServicesModule { }
