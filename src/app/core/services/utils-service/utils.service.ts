import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  public getLastPartOfUrl(url: string): any {
    // Get part after the last /
    const lastUrlPart = url.split('/').pop();
    // Return last part
    return lastUrlPart;
  }
}
