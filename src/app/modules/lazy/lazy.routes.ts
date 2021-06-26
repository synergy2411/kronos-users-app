import { Routes } from "@angular/router";
import { IAmLazyComponent } from "./components/i-am-lazy/i-am-lazy.component";

export const LAZY_ROUTES : Routes = [
  {
    path : "",                    // http://localhost:4200/lazy
    component : IAmLazyComponent
  }
]
