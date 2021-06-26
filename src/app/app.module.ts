import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from './modules/employee/employee.module';


import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { ProductComponent } from './components/product/product.component';
import { SpecificationComponent } from './components/product/specification/specification.component';
import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoggerInterceptorService } from './services/logger-interceptor.service';
import { ResponseInterceptorService } from './services/response-interceptor.service';


@NgModule({
  declarations: [     // Components, Directives, Pipes
    AppComponent,
    UsersComponent,
    UserComponent,
    UnlessDirective,
    HighlightDirective,
    PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    ObservableDemoComponent,
    NotFoundComponent,
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent
  ],
  imports: [          // Module - Builtin / Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule      // Eagerly Loaded
    // RoutingModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : LoggerInterceptorService,
      multi : true
    },{
      provide : HTTP_INTERCEPTORS,
      useClass : ResponseInterceptorService,
      multi : true
    }
    // DataService
  ],      // Service
  bootstrap: [AppComponent]     // loads the Root Component
})
export class AppModule { }
