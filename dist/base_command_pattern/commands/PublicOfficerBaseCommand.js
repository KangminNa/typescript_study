export class PublicOfficerBaseCommand {
    officerData;
    constructor() {
        this.officerData = { name: "", yearsOfService: 0 };
    }
    configure(dto) {
        this.officerData = dto;
    }
    execute(dto) {
        this.configure(dto);
        if (this.canExecute(dto)) {
            return this.onExecute(dto);
        }
        throw new Error("Execution not allowed: Invalid officer data.");
    }
    canExecute(dto) {
        return dto.yearsOfService > 0;
    }
    toString() {
        return `Name: ${this.officerData.name}, Years of Service: ${this.officerData.yearsOfService}`;
    }
    getOfficerData() {
        return this.officerData;
    }
}
//# sourceMappingURL=PublicOfficerBaseCommand.js.map