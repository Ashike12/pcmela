import { Component, OnInit } from '@angular/core';
import { ArnOjService } from '../../service/arn-oj.service';
import { first } from 'rxjs/operators';
import { IProblem } from '../../models/problem.model';
// import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arn-oj-default',
  templateUrl: './arn-oj-default.component.html',
  styleUrls: ['./arn-oj-default.component.scss']
})
export class ArnOjDefaultComponent implements OnInit {

  public problems: IProblem[];

  constructor(
    private arnOjService: ArnOjService
    // private router:Router,
    // private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    //this.getAllProblems();
    this.test();
  }
  getAllProblems(){
    this.arnOjService.getAllProblems().pipe(first())
    .subscribe((data)=>{
      this.problems = data;
    })
  }

  test(){
    debugger;
    this.arnOjService.submitProblem().subscribe((data)=>{
      data;
    })
  }

}
