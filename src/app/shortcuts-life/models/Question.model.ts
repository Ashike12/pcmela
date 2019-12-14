
export class QuestionModel{
    _id:string;
    question:string;
    answer: string;
    options: string[];
    category: string[];
    classes: string[];
    prioroty: number;
    questionSource: string;
    additionalSource: string[];
    
    constructor(data?){
        this._id = data && data._id ? data._id : null,
        this.prioroty = data && data.prioroty ? data.prioroty : null,
        this.question = data && data.question ? data.question : null,
        this.options = data && data.options ? data.options : [],
        this.answer = data && data.answer ? data.answer : null,
        this.category = data && data.category ? data.category : [],
        this.classes = data && data.classes ? data.classes : [],
        this.questionSource = data && data.questionSource ? data.questionSource: null
        this.additionalSource = data && data.additionalSource ? data.additionalSource: []
    }
}