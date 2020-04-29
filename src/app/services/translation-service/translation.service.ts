import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Translation } from 'src/app/entities/translation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private api: string = environment.api

  constructor(private http: HttpClient) { }

  public getAllTranslations(): Observable<Translation> {
    return this.http.get<Translation>(`${this.api}/translations`);
  }

  public getTranslation(lang: string): Observable<Translation> {
    return this.http.get<Translation>(`${this.api}/translations/${lang}`);
  }
}
