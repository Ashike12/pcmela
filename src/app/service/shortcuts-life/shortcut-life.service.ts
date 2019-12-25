import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionModel } from '../../shortcuts-life/models/Question.model';

@Injectable({
    providedIn: 'root'
})
export class ShortcutLifeService {
    private questionUrl = "https://localhost:44351/questions";
    constructor(
        private http:HttpClient
    ) { }

    insertQuestionData(questionModel:QuestionModel) {
        return this.http.post(this.questionUrl, questionModel);
    }
    updateQuestionData(questionModel:QuestionModel) {
        let url:string = this.questionUrl + "/" + questionModel._id;
        return this.http.post(url, questionModel);
    }
}
