import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  routes : Array<{links : string, id? : number}>;

  constructor() { }

  ngOnInit(): void {
    this.routes = [{
      links :'login'
    },{
      links :'register',
      id : 4
    },{
      links :'pipe'
    },{
      links :'users'
    },{
      links :'observable'
    }]
  }

}
