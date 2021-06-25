import { Injectable } from "@angular/core";
import { USERS } from "../data/mocks";
import { User } from "../model/user.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn : 'root'
})
export class DataService{

  private REST_URL : string = "https://kronos-users-app-default-rtdb.firebaseio.com/userdata.json";

  counter : number = 0;

  constructor(private httpClient : HttpClient){}

  getData() : Observable<User[]> {
    // return USERS;
    // return this.httpClient.get("./assets/data/userdata.json")
    //   .pipe(map(response => <User[]>response["userdata"]))

    return this.httpClient.get<User[]>(this.REST_URL)
  }

}
