import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ArticleType } from '../../models/journal';

@Injectable({
  providedIn: 'root'
})
export class ArticleTypeService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // Use the Pact mock server URL in test environment
    this.apiUrl = environment.test ? 'http://127.0.0.1:3003' : '/api';
  }

  getArticleTypes(): Observable<ArticleType[]> {
    return this.http.get<ArticleType[]>(`${this.apiUrl}/journal-meta-data/1`);
  }
} 