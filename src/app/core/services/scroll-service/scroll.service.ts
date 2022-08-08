import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private body: any;

  constructor() {
    this.body = document.getElementsByTagName('html')[0];
  }

  public disableScrolling(): void {
    this.body.setAttribute('style', 'overflow-y: hidden');
  }

  public enableScrolling() {
    this.body.removeAttribute('style');
  }
}
