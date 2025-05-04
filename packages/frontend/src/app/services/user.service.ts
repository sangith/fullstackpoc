import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // Use the Pact mock server URL in test environment
    this.apiUrl = environment.test ? 'http://127.0.0.1:1234' : '/api';
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/${id}`);
  }
} 