import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless (condition : Boolean){
    console.log("Condition - ", condition);
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef : TemplateRef<any>,
    private vcRef : ViewContainerRef) {
      console.log("Template Ref", this.templateRef);
    }

}
