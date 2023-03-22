import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { Account } from '../models/account';
import { AuthResponse } from '../models/authResponse';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signUpUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  signInUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  apiKey:string = "AIzaSyA-VCQuVDFMOPdMgnULzTP3BKf_Y-tAnkU";
  user = new BehaviorSubject<User|null>(null);

  constructor(private http: HttpClient) { }

  register(account : Account){
    return this.http.post<AuthResponse>(this.signUpUrl + this.apiKey, account)
      .pipe(
        tap(response => {
          this.handleUser(response);
        }), //observing without changing the data
        catchError(this.handleError)
      );
  }
  signIn(account: Account){
    return this.http.post<AuthResponse>(this.signInUrl + this.apiKey, account)
      .pipe(
        tap(response => {
          this.handleUser(response);
        }),
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

  handleUser(response: AuthResponse){
    const expirationDate = new Date(new Date().getTime() + (Number(response.expiresIn) * 1000))
    const user = new User(
      response.email,
      response.localId,
      response.idToken,
      expirationDate);

      console.log(user)
      this.user.next(user);
      localStorage.setItem("user", JSON.stringify(user));
  }

  autoLogin(){
    if(localStorage.getItem("user") == null){
      return;
    }

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const loadedUser = new User(user.email, user.id, user._token, user._tokenExpirationDate)
    if(user.token){
      this.user.next(loadedUser);
    }
  }
}
