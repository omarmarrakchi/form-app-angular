import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddreponseService {

  private apiUrl = 'http://127.0.0.1:8000/api/addres';

  constructor(private http: HttpClient) { }

  addResponse(response: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, response, { headers: headers });
  }
}
