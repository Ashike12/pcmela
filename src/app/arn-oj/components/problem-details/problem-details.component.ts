import { Component, OnInit } from '@angular/core';
import { IProblem, Problem } from '../../models/problem.model';
import { ActivatedRoute } from '@angular/router';
import { ArnOjService } from '../../service/arn-oj.service';
import { first } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SubmitProblemModalComponent } from '../submit-problem-modal/submit-problem-modal.component';

@Component({
  selector: 'app-problem-details',
  templateUrl: './problem-details.component.html',
  styleUrls: ['./problem-details.component.scss']
})
export class ProblemDetailsComponent implements OnInit {
  public problem: IProblem = new Problem();
  public isProblemLoaded = false;
  public problemHistory = ['Wrong Answer On 21', 'Accepted'];
  constructor(
    private activeRoute: ActivatedRoute,
    private arnOjService: ArnOjService,
    public matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.getProblem();
  }
  getProblem() {
    const problemId = this.activeRoute.snapshot.params.id;
    this.arnOjService.getProblemById(problemId).pipe(first())
      .subscribe((data) => {
        this.problem = data;
        this.isProblemLoaded = true;
      });
  }
  openSubmitModal(probId: string) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.minHeight = '150px';
    dialogConfig.maxHeight = '350px';
    dialogConfig.width = '600px';
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(SubmitProblemModalComponent, dialogConfig);
  }
}
