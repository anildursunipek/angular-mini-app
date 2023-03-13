import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  //ngOnInit component açıldığında çalışan ilk fonksiyondur. ngOnChance’den sonra gelen ikinci lifecycle eventidir. Burada getProduct’ı OnInit’e tanımlayarak component açıldığı anda ilk bu fonksiyonu çalıştırmasını istiyoruz.
  ngOnInit(): void {
  }

}
