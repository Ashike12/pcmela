import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { QuestionModel } from '../models/Question.model';
import { CommonService } from '../../service/common/common.service';
import { DefaultConstant } from '../../config/config.default.constant';
import { split as _split, replace as _replace } from 'lodash'

@Component({
  selector: 'app-shortcut-life-upload-question',
  templateUrl: './shortcut-life-upload-question.component.html',
  styleUrls: ['./shortcut-life-upload-question.component.scss']
})
export class ShortcutLifeUploadQuestionComponent implements OnInit {

  objectKeys = Object.keys;
  questionForm: FormGroup;
  questionData: QuestionModel = new QuestionModel();
  questionOptions = ["Options 1","Options 2","Options 3","Options 4","Options 5"];
  isQuestionSubmitted: boolean = false;
  classes = DefaultConstant.Class;
  categories = DefaultConstant.Category;

  constructor(private fb: FormBuilder, private commonService: CommonService) { }

  ngOnInit() {
    this.questionForm = this.createFormFields();
    this.addOptions(5);
    this.categories;
  }

  createFormFields(){
    return this.fb.group({
      question: ['', Validators.required],
      options: this.fb.array([
      ]),
      answer: ['', Validators.required],
      questionSource: [''],
      additionalSource: [''],
      classes: [null, Validators.required],
      category: [null, Validators.required],
      prioroty:[0]
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
    this.questionData._id = this.commonService.generateUUID();
    this.questionData.question = this.f.question.value;
    for(let i=0;i<5;i++){
      this.questionData.options.push(this.options.controls[i].value);
    }
    this.questionData.answer = this.f.answer.value;
    this.questionData.questionSource = this.f.questionSource.value;
    this.questionData.additionalSource = _split(_replace(this.f.additionalSource.value, ' ', ''), ',');
    this.questionData.classes = this.f.classes.value;
    this.questionData.category = this.f.category.value;
    this.questionData.prioroty = this.f.prioroty.value;
    // this.questionData
    this.isQuestionSubmitted = true;
  }
  updateQuestion(){

  }
  addAnother(){
    this.questionForm.reset;
  }

}
