import { CentralArchives } from './CentralArchives';
export class TrainingCenter {
    constructor() { }
    static trainOfficer(OfficerType, name, yearsOfService) {
        const officer = new OfficerType(name, yearsOfService);
        CentralArchives.register(officer);
        return officer;
    }
}
//# sourceMappingURL=TrainingCenter.js.map