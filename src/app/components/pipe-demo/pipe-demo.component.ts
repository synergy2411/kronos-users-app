import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  user = {
    firstName : "Foo",
    lastName : "Bar",
    dob : new Date("Dec 21, 1965"),
    income : 40000
  }

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here the data comes...");
    }, 3000);
  })

  constructor() { }

  ngOnInit(): void {
  }

}
