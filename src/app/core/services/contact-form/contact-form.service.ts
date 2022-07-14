import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ContactForm } from '../../models/contact-form';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  private api: string = environment.api;

  constructor(private http: HttpClient) {}

  public post(contactForm: ContactForm) {
    return this.http.post(`${this.api}/contact`, contactForm);
  }
}
