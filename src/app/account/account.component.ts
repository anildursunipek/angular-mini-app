import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
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
  loading:boolean = false;
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
    this.loading = true;
    let authResponse : Observable<AuthResponse>;

    if(this.isLoginMode){

      authResponse = this.authService.signIn(this.model);

    }else{

      authResponse = this.authService.register(this.model);

    }
    try {
      authResponse.subscribe(response =>{
        console.log(response)
      })
    } catch (error) {
      this.loading = false;
    }

  }

  toggleMode(){
    this.isLoginMode = !this.isLoginMode;
  }
}
