import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  // {
  //   path: "register-or-login",
  //   loadChildren: () =>
  //     import("./register-or-login/register-or-login.module").then(
  //       m => m.RegisterOrLoginModule
  //     )
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
