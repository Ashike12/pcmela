import { Component, OnInit } from '@angular/core';
import { IProblem, Problem } from '../../models/problem.model';
import { ActivatedRoute } from '@angular/router';
import { ArnOjService } from '../../service/arn-oj.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-problem-details',
  templateUrl: './problem-details.component.html',
  styleUrls: ['./problem-details.component.scss']
})
export class ProblemDetailsComponent implements OnInit {
  public problem: IProblem = new Problem();
  public isProblemLoaded = false;
  constructor(
    private activeRoute: ActivatedRoute,
    private arnOjService: ArnOjService
  ) { }

  ngOnInit() {
    this.getProblem()
  }
  getProblem() {
    const problemId = this.activeRoute.snapshot.params.id;
    this.arnOjService.getProblemById(problemId).pipe(first())
    .subscribe((data) => {
      this.problem = data;
      this.isProblemLoaded = true;
    })
  }
}
