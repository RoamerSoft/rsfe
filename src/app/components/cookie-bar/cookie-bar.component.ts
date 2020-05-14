import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-bar',
  templateUrl: './cookie-bar.component.html',
  styleUrls: ['./cookie-bar.component.scss'],
})
export class CookieBarComponent implements OnInit {
  public showCookieBar = true;

  constructor() {}

  ngOnInit() {
    if (this.getCookie('cookieAccepted') === 'false') {
      this.showCookieBar = false;
    }
  }

  private getCookie(name: string) {
    const re = new RegExp(name + '=([^;]+)');
    const value = re.exec(document.cookie);
    return value != null ? unescape(value[1]) : null;
  }
}
