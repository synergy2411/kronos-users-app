import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [     // Components, Directives, Pipes
    AppComponent,
    UsersComponent
  ],
  imports: [          // Module - Builtin / Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],      // Service
  bootstrap: [AppComponent]     // loads the Root Component
})
export class AppModule { }