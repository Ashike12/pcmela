import { Component, OnInit, Input, AfterViewInit, OnChanges } from '@angular/core';
import { IProblem } from '../../models/problem.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss']
})
export class ProblemListComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() problemList: IProblem;

  constructor(
    private router:Router,
    private activeRoute: ActivatedRoute
  ) { }
  
  ngOnInit() {
  }
  
  ngAfterViewInit(){
  }
  
  ngOnChanges(): void {
  }
  goToProblemDetails(problemId: string){
    this.router.navigate([`${problemId}`],
    {
      relativeTo: this.activeRoute,
      queryParamsHandling: "merge"
    });
  }
}
