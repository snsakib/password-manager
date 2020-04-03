import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';

import { RegisterOrLoginRoutingModule } from './register-or-login-routing.module';
import { RegisterOrLoginComponent } from './register-or-login.component';


@NgModule({
  declarations: [RegisterOrLoginComponent],
  imports: [
    CommonModule,
    RegisterOrLoginRoutingModule,
    MatTabsModule
  ]
})
export class RegisterOrLoginModule { }
