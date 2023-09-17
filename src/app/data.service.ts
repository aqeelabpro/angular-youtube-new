import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
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
  saveComments(body: Comments) {
    return this.http.post(`${this.baseUrl}/comments`, body);
  }
  deleteCommentByCommentId(commentId: number) {
    return this.http.delete(`${this.baseUrl}/comments/${commentId}`);
  }
}
