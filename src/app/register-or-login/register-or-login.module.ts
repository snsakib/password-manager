import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterOrLoginRoutingModule } from './register-or-login-routing.module';
import { RegisterOrLoginComponent } from './register-or-login.component';


@NgModule({
  declarations: [RegisterOrLoginComponent],
  imports: [
    CommonModule,
    RegisterOrLoginRoutingModule
  ]
})
export class RegisterOrLoginModule { }
