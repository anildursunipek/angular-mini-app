import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Account } from '../models/account';
import { AuthResponse } from '../models/authResponse';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  isLoginMode:boolean = true;
  model: Account= {
    email: "",
    password: "",
    returnSecureToken: true
  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleAuth(form:NgForm){
    if(!form.valid){
      console.log("Form is invalid");
      return;
    }

    if(this.isLoginMode){
      console.log("login mode...");
    }else{
      this.authService.register(this.model).subscribe(response =>{
        console.log(response);
      })
    }
  }

  toggleMode(){
    this.isLoginMode = !this.isLoginMode;
  }
}
