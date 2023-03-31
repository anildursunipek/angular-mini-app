import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated : boolean = false;
  isAdmin: boolean = false;
  constructor(private authService : AuthService) { }

  //ngOnInit component açıldığında çalışan ilk fonksiyondur. ngOnChance’den sonra gelen ikinci lifecycle eventidir. Burada getProduct’ı OnInit’e tanımlayarak component açıldığı anda ilk bu fonksiyonu çalıştırmasını istiyoruz.
  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      if(user != null){
        this.isAuthenticated = true;
      }else{
        this.isAuthenticated = false;
      }
      this.isAdmin = user?.email == environment.adminEmail;
    });

  }
  logout(){
    localStorage.removeItem("user");
    this.authService.user.next(null);
  }
}
