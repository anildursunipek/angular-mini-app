import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  error:string = "";
  model: Account= {
    email: "",
    password: "",
    returnSecureToken: true
  }
  constructor(
    private authService: AuthService,
    private route : Router) { }

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

    authResponse.subscribe({
      next: () => {
        this.loading = false;
        this.error = "";
        this.route.navigate(['/']);
      },
      error: (err) => {
        this.loading = false;
        this.error = err;
        console.log(err)
      }
    },
      )
  }

  toggleMode(){
    this.isLoginMode = !this.isLoginMode;
  }
}
