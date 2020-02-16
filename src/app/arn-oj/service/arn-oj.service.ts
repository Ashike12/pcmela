import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const httpHeader = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'MyClientCert': '',        // This is empty
  'MyToken': ''              // This is empty
}

@Injectable({
  providedIn: 'root'
})
export class ArnOjService {

  constructor(
    private http: HttpClient
  ) { 

  }

  getAllProblems(): Observable<any>{
    const problemUrl = environment.apiUrls.arnOJ + '/problems';
    return this.http.get(problemUrl, {headers: httpHeader});
  }
  getProblemById(probId: string): Observable<any>{
    const problemUrl = environment.apiUrls.arnOJ + '/problems/' + probId;
    return this.http.get(problemUrl, {headers: httpHeader});
  }
}
