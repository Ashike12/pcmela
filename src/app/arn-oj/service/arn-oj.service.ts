import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISubmitAnswer } from '../interfaces/submit-answer.interface';

const httpHeader = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  MyClientCert: '',        // This is empty
  MyToken: ''
};

@Injectable({
  providedIn: 'root'
})
export class ArnOjService {

  constructor(
    private http: HttpClient
  ) {

  }

  getAllProblems(): Observable<any> {
    const problemUrl = environment.apiUrls.arnOJ + 'problems';
    return this.http.get(problemUrl, { headers: httpHeader });
  }
  getProblemById(probId: string): Observable<any> {
    const problemUrl = environment.apiUrls.arnOJ + 'problems/' + probId;
    return this.http.get(problemUrl, { headers: httpHeader });
  }
  submitProblem(submitModel: ISubmitAnswer): Observable<any> {
    const url = environment.apiUrls.arnOJ + 'problems/submitSolution';
    return this.http.post(url, submitModel, { headers: httpHeader });
  }
  generateInput(problemId: string): Observable<any> {
    const url = environment.apiUrls.arnOJ + 'problems/generateInput';
    return this.http.post(url, {id: problemId}, { headers: httpHeader });
  }
}
