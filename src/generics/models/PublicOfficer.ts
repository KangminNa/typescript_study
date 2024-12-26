export abstract class PublicOfficer {
    public readonly name: string;
    public readonly yearsOfService: number;

    constructor(name: string, yearsOfService: number) {
        this.name = name;
        this.yearsOfService = yearsOfService;
    }

    // 근속 연수를 반환하는 메서드 추가
    public getYearsOfService(): number {
        return this.yearsOfService;
    }

    public abstract introduce(): void;

    public toString(): string {
        return `Name: ${this.name}, Years of service: ${this.yearsOfService}`;
    }
}
