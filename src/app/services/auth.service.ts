import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.http.post<AuthResponse>(this.signUpUrl + this.apiKey, account);
  }
  signIn(account: Account){
    return this.http.post<AuthResponse>(this.signInUrl + this.apiKey, account);
  }
}
