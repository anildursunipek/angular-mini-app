import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  isLoginMode:boolean = true;
  model:any = {

  }
  constructor() { }

  ngOnInit(): void {
  }

  handleAuth(form:NgForm){
    if(!form.valid){
      console.log("Form is invalid");
      return;
    }
    console.log("Form is valid");
  }
  createAccount(){
    console.log("Create Account Works....");
    return;
  }

  toggleMode(){
    this.isLoginMode = !this.isLoginMode;
  }
}
