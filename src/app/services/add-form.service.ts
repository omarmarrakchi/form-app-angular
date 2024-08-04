import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFormService {

  private apiUrl = 'http://127.0.0.1:8000/form/add';

  constructor(private http: HttpClient) { }

  addForm(formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, formData, { headers });
  }
}