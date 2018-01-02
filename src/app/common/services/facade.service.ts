import { Injectable, Injector } from '@angular/core';
import { AccountService } from './account.service';
import { DashboardService } from './dashboard.service';
import { LoginService } from './login.service';
import { ProductsService } from './products.service';
import { SignUpService } from './sign-up.service';

@Injectable()
export class FacadeService {
  
  private _accountService: AccountService;
  public get accountService(): AccountService {
    if(!this._accountService){
      this._accountService = this.injector.get(AccountService);
    }
    return this._accountService;
  }

  private _dashboardService: DashboardService;
  public get dashboardService(): DashboardService {
    debugger;
    if(!this._dashboardService){
      this._dashboardService = this.injector.get(DashboardService);
    }
    return this._dashboardService;
  } 

  private _loginService: LoginService;
  public get loginService(): LoginService {
    if(!this._loginService){
      this._loginService = this.injector.get(LoginService);
    }
    return this._loginService;
  } 

  private _productService: ProductsService;
  public get productService(): ProductsService {
    if(!this._productService){
      this._productService = this.injector.get(ProductsService);
    }
    return this._productService;
  } 

  private _signUpService: SignUpService;
  public get signUpService(): SignUpService {
    if(!this._signUpService){
      this._signUpService = this.injector.get(SignUpService);
    }
    return this._signUpService;
  }
  
  constructor(private injector: Injector) {

  }

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
