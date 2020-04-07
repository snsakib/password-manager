import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { RegisterOrLoginRoutingModule } from "./register-or-login-routing.module";
import { RegisterOrLoginComponent } from "./register-or-login.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [RegisterOrLoginComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RegisterOrLoginRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class RegisterOrLoginModule {}
