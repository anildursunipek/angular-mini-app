import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  isLoginMode:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  createAccount(){
    console.log("Create Account Works....");
    return;
  }

  toggleMode(){
    this.isLoginMode = !this.isLoginMode;
  }
}
