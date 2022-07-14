import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SubscribeForm } from '../../models/subscribe-form';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private api = `${environment.api}/subscribe`;

  constructor(private http: HttpClient) {
  }

  public subscribeToEbook(subscribeForm: SubscribeForm) {
    return this.http.post(`${this.api}/ebook`, subscribeForm);
  }
}
