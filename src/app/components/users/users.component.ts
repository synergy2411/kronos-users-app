
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { USERS } from 'src/app/data/mocks';
import { User } from 'src/app/model/user.model';

@Component({
  selector : "app-users",
  templateUrl : "./users.component.html",
  styleUrls : ["./users.component.css", "./users1.component.css"],
  // encapsulation : ViewEncapsulation.None
})
export class UsersComponent implements OnInit{
  users : User[];

  toggleUser : Boolean = true;

  ngOnInit(){
    this.users = USERS;
  }

  onVoteChange(value : number){
    // this.user.votes = value;
  }

  theParentFunc(value : string){
    alert(`Child Event value : ${value}`);
  }

  onToggleUser(){
    this.toggleUser = !this.toggleUser;
  }
}



// Shadom DOM - HTML5 API - encapsulate the functionality

// Emulated - apply the global styles, if styles does not exist on component
// Shadow - don't apply global style
// None - affects other components style
