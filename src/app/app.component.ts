import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kronos-users-app';
  constructor(private dataService :DataService){}
  getCounter(){
    return this.dataService.counter;
  }

  onIncrement(){
    this.dataService.counter++;
  }
}
