import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { QuestionModel } from '../models/Question.model';

@Component({
  selector: 'app-shortcut-life-upload-question',
  templateUrl: './shortcut-life-upload-question.component.html',
  styleUrls: ['./shortcut-life-upload-question.component.scss']
})
export class ShortcutLifeUploadQuestionComponent implements OnInit {

  questionForm: FormGroup;
  questionData: QuestionModel = new QuestionModel();
  questionOptions = ["Options 1","Options 2","Options 3","Options 4","Options 5"];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.questionForm = this.createFormFields();
    this.addOptions(5);
  }

  createFormFields(){
    return this.fb.group({
      question: ['', Validators.required],
      options: this.fb.array([
      ]),
      answer: ['', Validators.required]
    });
  }

  addOptions(numberOfOptions:number = 1){
    for(let i=1;i<=numberOfOptions;i++) this.options.push(this.fb.control('', i!=5 ? Validators.required:null));
  }

  get options(){
    return this.questionForm.get('options') as FormArray;
  }

  get f() { return this.questionForm.controls; }

  onSubmit(){
    this.questionData.question = this.f.question.value;
    for(let i=0;i<5;i++){
      this.questionData["option"+(i+1)] = this.options.controls[i].value;
    }
  }

}
