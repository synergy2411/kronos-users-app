import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, from, merge, Observable, Subscription } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  obs$ = new Observable(observer => {
    setTimeout(() => {
      observer.next("First Package")
    }, 1000);
    setTimeout(() => {
      observer.next("Second Package")
    }, 2000);
    setTimeout(() => {
      observer.next("Third Package")
    }, 4000);
    setTimeout(() => {
      // observer.error(new Error('Something bad happened...'))
    }, 5000);
    setTimeout(() => {
      observer.next("Fourth Package")
    }, 6000);
    setTimeout(() => {
      observer.complete();
    }, 8000);
  })

  unSub$ : Subscription;

  onSub(){
    this.unSub$ = this.obs$.subscribe(
      pkg => {console.log(pkg);},
      err => {console.error(err)},
      () => {console.log("COMPLETED")}
    );
    this.source.pipe(
      map(v => "Friend Name : " + v),
      filter(f => f.includes("Baz")),
      delay(1000))
      .subscribe(friend => console.log(friend));
  }

  friends = ["Foo", "Bar","Bam", "Baz"];
  source = from(this.friends);

  onUnsub(){
    this.unSub$.unsubscribe();

  }

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  onForkJoin(){
    forkJoin({
      call_1 : this.httpClient.get("https://reqres.in/api/users?page=1"),
      call_2 : this.httpClient.get("https://reqres.in/api/users?page=2"),
    }).subscribe(console.log);
  }

  onMerge(){
    merge(
      this.httpClient.get("https://reqres.in/api/users?page=1"),
      this.httpClient.get("https://reqres.in/api/users?page=1")
    ).subscribe(console.log);
  }

}



// Two REST API Calls -> one cumulate Result
// - https://reqres.in/api/users?page=1
// - https://reqres.in/api/users?page=2

// Operator: forkJoin() | merge() |
