export interface IProblem {
    id: string;
    title: string;
    description: string;
    sample_input: string;
    sample_output: string;
    example_input: string[];
    exapmle_output: string[];
}

export class Problem {
    id: string;
    title: string;
    description: string;
    sample_input: string;
    sample_output: string;
    example_input: string[];
    exapmle_output: string[];
    constructor(data?: any) {
        this.id = (data && data.id) ? data.id : '';
        this.title = (data && data.title) ? data.title : '';
        this.description = (data && data.description) ? data.description : '';
        this.sample_input = (data && data.sample_input) ? data.sample_input : '';
        this.sample_output = (data && data.sample_output) ? data.sample_output : '';
        this.example_input = (data && data.example_input) ? data.example_input : [];
        this.exapmle_output = (data && data.exapmle_output) ? data.exapmle_output : [];
    }
}