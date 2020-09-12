import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  =  false;
  @Output() userNameEvent = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get formControls() {
    return this.loginForm.controls;
   }
   login(){
    this.isSubmitted = true;
    if (this.loginForm.invalid){
      return;
    }
    this.userNameEvent.emit(this.loginForm.value);
    this.isSubmitted = true;
  }
}
