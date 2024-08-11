import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewreponseService {

  private apiUrl = 'http://127.0.0.1:8000/response';

  constructor(private http: HttpClient) { }

  getreponses(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}/details`);
  }
}
