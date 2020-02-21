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

  getAllProblems(): Observable<any> {
    const problemUrl = environment.apiUrls.arnOJ + '/problems';
    return this.http.get(problemUrl, { headers: httpHeader });
  }
  getProblemById(probId: string): Observable<any> {
    const problemUrl = environment.apiUrls.arnOJ + '/problems/' + probId;
    return this.http.get(problemUrl, { headers: httpHeader });
  }
  submitProblem(): Observable<any> {
    const url = 'https://sphere-engine.com/demo/1-online-compiler?run=1';
    const body = 'source=%23include%3Cstdio.h%3E%0D%0A%23include%3Ccstring%3E%0D%0A%23include%3Calgorithm%3E%0D%0A%23include%3Ccctype%3E%0D%0A%23include%3Ccmath%3E%0D%0A%23include%3Ciomanip%3E%0D%0Ausing+namespace+std%3B%0D%0A+%0D%0Aint+T+%2C+t+%2C+m+%2C+ml+%2C+mr+%2C+x+%2C+l+%2C+r%3B%0D%0A+%0D%0Aint+main%28%29%7B%0D%0A%09for%28scanf%28%22%25d%22+%2C+%26T%29+%3B+T+%3B+--T%29%7B%0D%0A%09%09scanf%28%22%25d+%25d%22+%2C+%26t+%2C+%26m%29%3B+ml+%3D+mr+%3D+m%3B+int+current+%3D+0%3B+bool+flg+%3D+1%3B%0D%0A%09%09for%28int+i+%3D+1+%3B+i+%3C%3D+t+%3B+%2B%2Bi%29%7B%0D%0A%09%09%09scanf%28%22%25d+%25d+%25d%22+%2C+%26x+%2C+%26l+%2C+%26r%29%3B%0D%0A%09%09%09ml+-%3D+x+-+current%3B+mr+%2B%3D+x+-+current%3B+current+%3D+x%3B%0D%0A%09%09%09ml+%3D+max%28ml+%2C+l%29%3B+mr+%3D+min%28mr+%2C+r%29%3B+flg+%26%3D+ml+%3C%3D+mr%3B%0D%0A%09%09%7D%0D%0A%09%09puts%28flg+%3F+%22YES%22+%3A+%22NO%22%29%3B%0D%0A%09%7D%0D%0A%09return+0%3B%0D%0A%7D&input=4%0D%0A3+0%0D%0A5+1+2%0D%0A7+3+5%0D%0A10+-1+0%0D%0A2+12%0D%0A5+7+10%0D%0A10+16+20%0D%0A3+-100%0D%0A100+0+0%0D%0A100+-50+50%0D%0A200+100+100%0D%0A1+100%0D%0A99+-100+0&csrfmiddlewaretoken=EANavWLsIVVD3kE1A97CKOeQvHpLHJ7JRuYObejfwvRTY3WTfCx4FO1Ug8HzQ2Uq&template_id=1&lang=1';
    return this.http.post(url, body, { headers: httpHeader });
  }
}
