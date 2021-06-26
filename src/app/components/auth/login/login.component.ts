import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm : NgForm;
  constructor(
    private authService : AuthService,
    private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    console.log(form);
    this.authService.login(form.value.username, form.value.password)
      .then(resp => {
        alert(resp);
        if(resp === "AUTHENTICATED"){
          this.router.navigate(['users']);
        }
      }).catch(err => {
        alert(err);
        form.reset();
      })
      .catch(console.log);
  }

  onReset(form : NgForm){
    form.reset();
  }
}
