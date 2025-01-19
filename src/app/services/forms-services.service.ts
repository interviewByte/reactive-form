import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FormsServicesService {
  constructor(private http: HttpClient) {}

  submitForm(url: any, body: any): Observable<any> {
    return this.http.post(url, { body });
  }
}
