import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:5000'; 

  constructor(private http: HttpClient) { }

  signupFormData(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, formData);
  }

  login(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/signIn`, formData);
  }

  getProfile(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile/${username}`);
  }

  updateProfile(username: string, userData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/profile/${username}`, userData);
  }
}