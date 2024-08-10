import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDetailsService {

  private apiUrl = 'http://127.0.0.1:8000/form';

  constructor(private http: HttpClient) { }

  getFormResponses(formId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${formId}/responses`);
  }
}