import { Routes } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ObservableDemoComponent } from "./components/observable-demo/observable-demo.component";
import { PipeDemoComponent } from "./components/pipe-demo/pipe-demo.component";
import { OverviewComponent } from "./components/product/overview/overview.component";
import { ProductComponent } from "./components/product/product.component";
import { SpecificationComponent } from "./components/product/specification/specification.component";
import { UsersComponent } from "./components/users/users.component";
import { LoginGaurdService } from "./services/login-gaurd.service";

export const APP_ROUTES : Routes = [
  {
    path : "",                    // http://locahost:4200
    redirectTo : "login",
    pathMatch : "full"
  },{
    path : "login",               // http://locahost:4200/login
    component : LoginComponent
  },{
    path : "register",            // http://locahost:4200/register
    component : RegisterComponent
  },{
    path : "users",               // http://locahost:4200/users
    component : UsersComponent,
    canActivate : [LoginGaurdService]
  },{
    path : "pipe",                // http://locahost:4200/pipe
    component : PipeDemoComponent
  },{
    path : "observable",          // http://locahost:4200/observable
    component : ObservableDemoComponent
  },{
    path : "product",
    component : ProductComponent,
    children : [
      {path : "overview/:id", component : OverviewComponent},
      {path : "specification", component : SpecificationComponent}
    ]
  },{
    path : "not-found",
    component : NotFoundComponent
  },{
    path : "**",                  // http://locahost:4200/nowhere
    redirectTo : "not-found",
    pathMatch : "full"
  }
]
