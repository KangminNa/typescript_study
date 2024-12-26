export interface OfficerRequest {
    name: string;
    yearsOfService: number;
}

export interface OfficerResult {
    introduction: string;
}

export abstract class PublicOfficerBaseCommand {
    protected officerData: OfficerRequest;

    constructor() {
        this.officerData = { name: "", yearsOfService: 0 };
    }

    public configure(dto: OfficerRequest): void {
        this.officerData = dto;
    }

    public execute(dto: OfficerRequest): OfficerResult {
        this.configure(dto);
        if (this.canExecute(dto)) {
            return this.onExecute(dto);
        }
        throw new Error("Execution not allowed: Invalid officer data.");
    }

    protected canExecute(dto: OfficerRequest): boolean {
        return dto.yearsOfService > 0;
    }

    protected abstract onExecute(dto: OfficerRequest): OfficerResult;


    public toString(): string {
        return `Name: ${this.officerData.name}, Years of Service: ${this.officerData.yearsOfService}`;
    }
    public getOfficerData(): OfficerRequest {
        return this.officerData;
    }
}
