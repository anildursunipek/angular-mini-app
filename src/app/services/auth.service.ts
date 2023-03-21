import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Account } from '../models/account';
import { AuthResponse } from '../models/authResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signUpUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  signInUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  apiKey:string = "AIzaSyA-VCQuVDFMOPdMgnULzTP3BKf_Y-tAnkU";

  constructor(private http: HttpClient) { }

  register(account : Account){
    return this.http.post<AuthResponse>(this.signUpUrl + this.apiKey, account)
      .pipe(
        catchError(this.handleError)
      );
  }
  signIn(account: Account){
    return this.http.post<AuthResponse>(this.signInUrl + this.apiKey, account)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(err: HttpErrorResponse){
    let message = "";

    if(err.error.error){
      switch(err.error.error.message){
        case "EMAIL_EXISTS":
          message = "There is a user for this mail.";
          break;
        case "OPERATION_NOT_ALLOWED":
          message = "Operation not allowed.";
          break;
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          message = "Too many attempts try later.";
          break;
        case "EMAIL_NOT_FOUND":
          message = "No account found for this email.";
          break;
        case "INVALID_PASSWORD":
          message = "Invalid passsword.";
          break;
        case "USER_DISABLED":
          message  = "User disabled.";
          break;
      }
    }
    return throwError(() => message)
  }
}
