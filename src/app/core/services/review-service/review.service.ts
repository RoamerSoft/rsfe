import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Review } from '../../entities/review/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private api: string = environment.api;

  constructor(
    private http: HttpClient,
  ) {
  }

  public getAll(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.api}/reviews`);
  }
}
