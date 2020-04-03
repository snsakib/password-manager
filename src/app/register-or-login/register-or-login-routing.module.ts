import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterOrLoginComponent } from './register-or-login.component';

const routes: Routes = [{ path: '', component: RegisterOrLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterOrLoginRoutingModule { }
