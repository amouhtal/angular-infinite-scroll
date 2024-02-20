import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationDummyService {
  private totalItems = 100;

  constructor() {}

  getItems(page: number = 1, pageSize: number = 10): Observable<string[]> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const items = [];
    for (let i = startIndex; i < endIndex; i++) {
      if (i >= this.totalItems) {
        break;
      }
      items.push(`Item ${i + 1}`);
    }
    return of(items).pipe(delay(1500));
  }
}
