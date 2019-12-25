export class TranslationOptionModel {
    TranslationKey: string;
    DefaultValue: string;

    constructor(data?){
        this.TranslationKey = data && data.TranslationKey ? data.TranslationKey : null,
        this.DefaultValue = data && data.DefaultValue ? data.DefaultValue : null
    }
}


export class QuestionModel{
    _id:string;
    Question:TranslationOptionModel;
    Answer: string;
    Options: TranslationOptionModel[];
    Category: string[];
    Classes: string[];
    Prioroty: number;
    QuestionSource: string;
    AdditionalSource: string[];
    Description: string;
    
    constructor(data?){
        this._id = data && data._id ? data._id : null,
        this.Prioroty = data && data.Prioroty ? data.Prioroty : null,
        this.Question = new TranslationOptionModel(data && data.Question),
        this.Options = data && data.Options ? data.Options : [],
        this.Answer = data && data.Answer ? data.Answer : null,
        this.Category = data && data.Category ? data.Category : [],
        this.Classes = data && data.Classes ? data.Classes : [],
        this.QuestionSource = data && data.QuestionSource ? data.QuestionSource: null,
        this.AdditionalSource = data && data.AdditionalSource ? data.AdditionalSource: [],
        this.Description = data && data.Description ? data.Description: null
    }
}