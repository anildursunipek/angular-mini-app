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
  error:string = "";
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

    authResponse.subscribe({
      next: (response) => {
        this.loading = false;
        this.error = "";
      },
      error: (response) => {
        this.loading = false;
        if(response.error.error){
          switch(response.error.error.message){
            case "EMAIL_EXISTS":
              this.error = "There is a user for this mail";
              break;
            case "OPERATION_NOT_ALLOWED":
              this.error = "Operation not allowed.";
              break;
            case "TOO_MANY_ATTEMPTS_TRY_LATER":
              this.error = "Too many attempts try later";
              break;
            case "EMAIL_NOT_FOUND":
              this.error = "No account found for this email.";
              break;
            case "INVALID_PASSWORD":
              this.error = "Invalid passsword.";
              break;
            case "USER_DISABLED":
              this.error = "User disabled.";
              break;
          }
        }
      }
    },
      )
  }

  toggleMode(){
    this.isLoginMode = !this.isLoginMode;
  }
}
