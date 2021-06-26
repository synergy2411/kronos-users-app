import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  routes : Array<{links : string, id? : number}>;

  constructor(public authService : AuthService, private router : Router) { }

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

  onLogout(){
    this.authService.logout().then(res => {
      if(res === "LOGOUT_SUCCESSFULLY"){
        this.router.navigate(['login']);
      }
    });
  }


}
