import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmLazyComponent } from './components/i-am-lazy/i-am-lazy.component';
import { RouterModule } from '@angular/router';
import { LAZY_ROUTES } from './lazy.routes';



@NgModule({
  declarations: [IAmLazyComponent],
  imports: [
    CommonModule, RouterModule.forChild(LAZY_ROUTES)
  ]
})
export class LazyModule { }
