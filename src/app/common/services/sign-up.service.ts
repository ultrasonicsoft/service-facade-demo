import { Injectable } from '@angular/core';

@Injectable()
export class SignUpService {

  constructor() { }

  isSignedUp(){
    return 'is signed up returned from SignUp Service';
  }
}
