import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFormService {

  private apiUrl = 'http://127.0.0.1:8000/form/add';
  private getAllFormsUrl = 'http://127.0.0.1:8000/form/all';
  private getFormByIdUrl = 'http://127.0.0.1:8000/form/';

  constructor(private http: HttpClient) { }

  addForm(formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, formData, { headers });
  }

  getAllForms(): Observable<any> {
    return this.http.get(this.getAllFormsUrl);
  }

  getFormById(id: number): Observable<any> {
    return this.http.get(this.getFormByIdUrl + id);
  }
}