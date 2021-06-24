import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb : FormBuilder) {
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }

  ngOnInit(): void {
  }

  onRegister(){
    console.log(this.registerForm);
  }

  onReset(){
    this.registerForm.reset();
  }

  private isExclamationPresent(control : FormControl){
    const containsExclamation = control.value.indexOf("!") >= 0;
    return containsExclamation ? null : {needExclamation : true}
  }

}
