import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.isExclamationPresent
  ]);

  registerForm : FormGroup;

  constructor(private fb : FormBuilder, private authService : AuthService) {
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }

  ngOnInit(): void {
  }

  onRegister(){
    console.log(this.registerForm);
    this.authService.register(
      this.registerForm.value.username,
      this.registerForm.value.password).then(resp => {
        alert(resp)
      }).catch(err => {
        console.log(err);
      });
  }

  onReset(){
    this.registerForm.reset();
  }

  private isExclamationPresent(control : FormControl){
    const containsExclamation = control.value.indexOf("!") >= 0;
    return containsExclamation ? null : {needExclamation : true}
  }

}
