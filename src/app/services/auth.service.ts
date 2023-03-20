import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { AuthResponse } from '../models/authResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-VCQuVDFMOPdMgnULzTP3BKf_Y-tAnkU";
  constructor(private http: HttpClient) { }

  register(account : Account){
    return this.http.post<AuthResponse>(this.url, account);
  }


}
