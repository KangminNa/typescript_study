export class PublicOfficer {
    name;
    yearsOfService;
    constructor(name, yearsOfService) {
        this.name = name;
        this.yearsOfService = yearsOfService;
    }
    // 근속 연수를 반환하는 메서드 추가
    getYearsOfService() {
        return this.yearsOfService;
    }
    toString() {
        return `Name: ${this.name}, Years of service: ${this.yearsOfService}`;
    }
}
//# sourceMappingURL=PublicOfficer.js.map