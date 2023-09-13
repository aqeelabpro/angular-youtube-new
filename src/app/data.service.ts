import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from './comments';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = `https://jsonplaceholder.typicode.com`;
  constructor(private http: HttpClient) {}
  fetchData(): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.baseUrl}/comments`);
  }
}
