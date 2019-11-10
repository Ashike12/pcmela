
export class QuestionModel{
    _id:string;
    question:string;
    option1: any;
    option2: any;
    option3: any;
    option4: any;
    option5: any;
    answer:string;

    constructor(data?){
        this._id = data && data._id ? data._id : null,
        this.question = data && data.question ? data.question : "",
        this.option1 = data && data.option1 ? data.option1 : null,
        this.option2 = data && data.option2 ? data.option2 : null,
        this.option3 = data && data.option3 ? data.option3 : null,
        this.option4 = data && data.option4 ? data.option4 : null,
        this.option5 = data && data.option5 ? data.option5 : null,
        this.answer = data && data.answer ? data.answer : ""
    }
}