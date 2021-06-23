import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector : "[appHighlight]"
})
export class HighlightDirective{

  @Input() appHighlightfavColor : string;
  @HostBinding('style.background-color') bgColor : any;

  @HostListener('mouseenter')
  onmouseenter(){
    console.log("MOUSE ENTER");
    // this.bgColor = this.favColor;
    this.elementRef.nativeElement.style.backgroundColor = "grey";
  }

  @HostListener('mouseleave')
  onmouseleave(){
    this.elementRef.nativeElement.style.backgroundColor = "transparent";
    // this.bgColor = "transparent";
  }

  constructor(private elementRef : ElementRef){
    // console.log("NATIVE ELEMENT", this.elementRef.nativeElement);
    // console.log("ELEMENT REF " , this.elementRef);
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }

}
