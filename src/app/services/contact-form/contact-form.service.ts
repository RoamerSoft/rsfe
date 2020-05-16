import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ContactForm } from 'src/app/models/contact-form/contact-form';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  private api: string = environment.api;

  constructor(private http: HttpClient) {}

  public post(contactForm: ContactForm) {
    return this.http.post<ContactForm>(`${this.api}/contact`, contactForm);
  }
}
