import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { UnlessDirective } from './directives/unless.directive';
import { HighlightDirective } from './Directives/highlight.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';

@NgModule({
  declarations: [     // Components, Directives, Pipes
    AppComponent,
    UsersComponent,
    UserComponent,
    UnlessDirective,
    HighlightDirective,
    PipeDemoComponent
  ],
  imports: [          // Module - Builtin / Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],      // Service
  bootstrap: [AppComponent]     // loads the Root Component
})
export class AppModule { }
