import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() user : any;
  @Output() childEvent = new EventEmitter<string>()

  onClick(){
    this.childEvent.emit("Event Data")
  }

}

