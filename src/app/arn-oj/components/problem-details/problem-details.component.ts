import { Component, OnInit } from '@angular/core';
import { IProblem, Problem } from '../../models/problem.model';
import { ActivatedRoute } from '@angular/router';
import { ArnOjService } from '../../service/arn-oj.service';
import { first, take } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SubmitProblemModalComponent } from '../submit-problem-modal/submit-problem-modal.component';
import { ISubmitAnswer } from '../../interfaces/submit-answer.interface';
import { IProblemSubmitModal } from '../../interfaces/problem-submit-modal.interface';

@Component({
  selector: 'app-problem-details',
  templateUrl: './problem-details.component.html',
  styleUrls: ['./problem-details.component.scss']
})
export class ProblemDetailsComponent implements OnInit {
  public problem: IProblem = new Problem();
  public isProblemLoaded = false;
  public problemHistory = [];
  public problemId: string;
  private localStorageHistoryData: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private arnOjService: ArnOjService,
    public matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.problemId = this.activeRoute.snapshot.params.id;
    this.getProblem();
    this.localStorageHistoryData = JSON.parse(localStorage.getItem('problemHistory'));
    this.localStorageHistoryData =  this.localStorageHistoryData ? this.localStorageHistoryData : {};
    this.problemHistory = this.localStorageHistoryData[this.problemId] ? this.localStorageHistoryData[this.problemId] : [];
  }
  getProblem() {
    this.arnOjService.getProblemById(this.problemId).pipe(first())
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
    dialogConfig.data = { problemId: this.problemId };
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(SubmitProblemModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe((modalResponse: IProblemSubmitModal) => {
      if (modalResponse) {
        const submitConfig: ISubmitAnswer = {
          id: this.problemId,
          solution: modalResponse.userSolution.split('\n')
        }
        this.arnOjService.submitProblem(submitConfig).pipe(take(1)).subscribe((res) => {
          this.problemHistory.push({
            status: res.status === 'Accepted' ? res.status : res.status + 'on test case ' + res.failedIndex,
            corespondingCode: modalResponse.userCode
          });
          this.localStorageHistoryData[this.problemId] = this.problemHistory;
          localStorage.setItem('problemHistory',JSON.stringify(this.localStorageHistoryData));
        });
      }
    })
  }
}
