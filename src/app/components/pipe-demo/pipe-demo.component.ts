import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class PipeDemoComponent implements OnInit {



  todoCollection = [
    {label : "buy the jeans", status : "done"},
    {label : "renew car insurance", status : "pending"},
    {label : "pot the plants", status : "done"}
  ]

  onAddNewItem(){
    this.todoCollection.push({
      label :"Item "+ this.todoCollection.length,
      status : "pending"
    })
  }

  filteredStatus : string = "";

  user = {
    firstName : "Foo",
    lastName : "Bar",
    dob : new Date("Dec 21, 1965"),
    income : 40000,
    contact_number : 987654321
  }

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here the data comes...");
    }, 3000);
  })

  constructor(private cdRef : ChangeDetectorRef) {
    // this.cdRef.
  }

  ngOnInit(): void {
  }

}
