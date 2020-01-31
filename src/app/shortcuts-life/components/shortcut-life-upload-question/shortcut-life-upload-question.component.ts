import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { QuestionModel, TranslationOptionModel } from '../../models/Question.model';
import { CommonService } from '../../../service/common/common.service';
import { DefaultConstant } from '../../../config/config.default.constant';
import { split as _split, replace as _replace } from 'lodash'
import { ShortcutLifeTextToJsonService } from '../../../service/shortcuts-life/shortcut-life-text-to-json.service';
import { ShortcutLifeService } from '../../../service/shortcuts-life/shortcut-life.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shortcut-life-upload-question',
  templateUrl: './shortcut-life-upload-question.component.html',
  styleUrls: ['./shortcut-life-upload-question.component.scss']
})
export class ShortcutLifeUploadQuestionComponent implements OnInit, OnDestroy {

  objectKeys = Object.keys;
  questionForm: FormGroup;
  questionData: QuestionModel = new QuestionModel();
  questionOptions = ["Options 1", "Options 2", "Options 3", "Options 4", "Options 5"];
  language: string;
  isQuestionSubmitted: boolean = false;
  classes = DefaultConstant.Class;
  categories = DefaultConstant.Category;
  private _unsubscribeAll: Subject<any>;
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private shortcutLifeTextToJsonService: ShortcutLifeTextToJsonService,
    private shortcutLifeService: ShortcutLifeService,
    private translate: TranslateService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.questionForm = this.createFormFields();
    this.addOptions(5);
    this.categories;
    this.translate.onLangChange.pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: any) => {
        if (data && data.lang) {
          if (data.lang == 'bn') {
            this.language = 'Bengali'
          } else{
              this.language = 'English'
          }
        } else{
          this.language = 'English'
        }
      })
  }

  createFormFields() {
    return this.fb.group({
      question: ['', Validators.required],
      options: this.fb.array([
      ]),
      answer: ['', Validators.required],
      questionSource: [''],
      additionalSource: [''],
      classes: [null, Validators.required],
      category: [null, Validators.required],
      prioroty: [0]
    });
  }

  addOptions(numberOfOptions: number = 1) {
    for (let i = 1; i <= numberOfOptions; i++) this.options.push(this.fb.control('', i != 5 ? Validators.required : null));
  }

  get options() {
    return this.questionForm.get('options') as FormArray;
  }

  get f() { return this.questionForm.controls; }

  onSubmit() {
    this.questionData._id = this.questionData._id ? this.questionData._id : this.commonService.generateUUID();
    this.questionData.Question = {
      DefaultValue: this.f.question.value,
      TranslationKey: this.shortcutLifeTextToJsonService.convertTextToJson(this.f.question.value, false, true)
    }
    for (let i = 0; i < 5; i++) {
      let option: TranslationOptionModel = {
        DefaultValue: this.options.controls[i].value,
        TranslationKey: this.shortcutLifeTextToJsonService.convertTextToJson(this.options.controls[i].value, false, true)
      };
      this.questionData.Options.push(option);
    }
    this.questionData.Answer = this.options.controls[this.f.answer.value].value;
    this.questionData.QuestionSource = this.f.questionSource.value;
    this.questionData.AdditionalSource = _split(_replace(this.f.additionalSource.value, ' ', ''), ',');
    this.questionData.Classes = this.f.classes.value;
    this.questionData.Category = this.f.category.value;
    this.questionData.Prioroty = this.f.prioroty.value;
    this.questionData.Language = this.language;
    // this.questionData
    if (!this.isQuestionSubmitted) {
      this.shortcutLifeService.insertQuestionData(this.questionData).pipe(takeUntil(this._unsubscribeAll))
        .subscribe((res) => {
          this.isQuestionSubmitted = true;
        });
    } else {
      this.shortcutLifeService.updateQuestionData(this.questionData).pipe(takeUntil(this._unsubscribeAll))
        .subscribe((res) => {
          res;
        });
    }
  }
  addAnother() {
    this.questionForm.reset();
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
