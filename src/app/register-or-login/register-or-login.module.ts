import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';

import { RegisterOrLoginRoutingModule } from './register-or-login-routing.module';
import { RegisterOrLoginComponent } from './register-or-login.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [RegisterOrLoginComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RegisterOrLoginRoutingModule,
    MatTabsModule
  ]
})
export class RegisterOrLoginModule { }
