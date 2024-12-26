export class CentralArchives {
    static officers = [];
    constructor() { }
    static clear() {
        this.officers = [];
    }
    static get allOfficers() {
        // officers 반환
        return this.officers;
    }
    static register(officer) {
        // 중복 방지 로직 추가
        if (!this.officers.some(o => o.name === officer.name && o.getYearsOfService() === officer.getYearsOfService())) {
            this.officers.push(officer);
        }
    }
    static remove(officer) {
        const index = this.officers.indexOf(officer);
        if (index > -1) {
            // officer 제거
            this.officers.splice(index, 1);
        }
    }
}
//# sourceMappingURL=CentralArchives.js.map