import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { DashboardService } from './dashboard.service';
import { LoginService } from './login.service';
import { ProductsService } from './products.service';
import { SignUpService } from './sign-up.service';

@Injectable()
export class FacadeService {

  constructor(
    private accountService: AccountService,
    private dashboardService: DashboardService,
    private loginService: LoginService,
    private productService: ProductsService,
    private signUpService: SignUpService) { }

  getOrderList() {
    return this.accountService.getOrderList();
  }
  getAddress() {
    return this.accountService.getAddress();
  }

  getDashboardContent() {
    return this.dashboardService.getDashboardContent();
  }

  isAuthenticated() {
    return this.loginService.isAuthenticated();
  }

  getProductDetails() {
    return this.productService.getProductDetails();
  }

  getProductOverview() {
    return this.productService.getProductOverview();
  }

  isSignedUp() {
    return this.signUpService.isSignedUp();
  }
}
