import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.baseUrl + '/users');
  }
}
