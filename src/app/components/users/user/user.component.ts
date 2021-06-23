import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent
implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() user : User;

  @Output() childEvent = new EventEmitter<string>()

  dynamicStyle = {
    'border' : '2px green solid',
    'font-size' : '1.2em'
  }

  dynamicClass = {'my-border' : true, 'my-size' : false}

  onClick(){
    this.childEvent.emit("Event Data");
    this.dynamicStyle['font-size'] = '1em';
    this.dynamicClass['my-border'] = !this.dynamicClass['my-border']
    this.dynamicClass['my-size'] = !this.dynamicClass['my-size']
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }





}

