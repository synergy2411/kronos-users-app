import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { UnlessDirective } from './directives/unless.directive';
import { HighlightDirective } from './Directives/highlight.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DataService } from './services/data.service';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { LoggerInterceptorService } from './services/logger-interceptor.service';
import { ResponseInterceptorService } from './services/response-interceptor.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './components/header/header.component';

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
    HeaderComponent
  ],
  imports: [          // Module - Builtin / Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
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
