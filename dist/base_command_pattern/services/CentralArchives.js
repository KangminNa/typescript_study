export class CentralArchives {
    static officers = [];
    constructor() { }
    static get allOfficers() {
        return this.officers;
    }
    static register(officer) {
        const isDuplicate = this.officers.some((o) => o.getOfficerData().name === officer.getOfficerData().name &&
            o.getOfficerData().yearsOfService === officer.getOfficerData().yearsOfService);
        if (!isDuplicate) {
            this.officers.push(officer);
        }
    }
    static remove(officer) {
        const index = this.officers.findIndex((o) => o.getOfficerData().name === officer.getOfficerData().name &&
            o.getOfficerData().yearsOfService === officer.getOfficerData().yearsOfService);
        if (index > -1) {
            this.officers.splice(index, 1);
        }
    }
    static clear() {
        this.officers = [];
    }
    /**
     * 특정 기준으로 공무원 검색
     * @param predicate 검색 조건
     */
    static find(predicate) {
        return this.officers.filter(predicate);
    }
}
//# sourceMappingURL=CentralArchives.js.map