export class TrainingCenter {
    name: string;
    yearsOfService: number;
    type: string;

    constructor(name: string = '', yearsOfService: number = 0, type: string = 'general') {
        this.name = name;
        this.yearsOfService = yearsOfService;
        this.type = type;
    }
}
