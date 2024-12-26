import { PublicOfficerBaseCommand } from "../commands/PublicOfficerBaseCommand";

export class CentralArchives {
    private static officers: PublicOfficerBaseCommand[] = [];

    private constructor() {}

    public static get allOfficers(): ReadonlyArray<PublicOfficerBaseCommand> {
        return this.officers as ReadonlyArray<PublicOfficerBaseCommand>;
    }

    public static register(officer: PublicOfficerBaseCommand): void {
        const isDuplicate = this.officers.some(
            (o) =>
                o.getOfficerData().name === officer.getOfficerData().name &&
                o.getOfficerData().yearsOfService === officer.getOfficerData().yearsOfService
        );

        if (!isDuplicate) {
            this.officers.push(officer);
        }
    }

    public static remove(officer: PublicOfficerBaseCommand): void {
        const index = this.officers.findIndex(
            (o) =>
                o.getOfficerData().name === officer.getOfficerData().name &&
                o.getOfficerData().yearsOfService === officer.getOfficerData().yearsOfService
        );

        if (index > -1) {
            this.officers.splice(index, 1);
        }
    }

    public static clear(): void {
        this.officers = [];
    }

    /**
     * 특정 기준으로 공무원 검색
     * @param predicate 검색 조건
     */
    public static find(predicate: (officer: PublicOfficerBaseCommand) => boolean): PublicOfficerBaseCommand[] {
        return this.officers.filter(predicate);
    }
}
