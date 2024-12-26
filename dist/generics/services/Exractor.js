import { Developer } from "../models/Developer";
import { Firefighter } from "../models/Firefighter";
import { Police } from "../models/Police";
import { CentralArchives } from "./CentralArchives";
export class Exractor {
    constructor() { }
    ;
    // 근속년수에 따른 짝수와 홀수에 맞춰서 
    static getOfficersByServiceParity(isEven) {
        const result = [];
        for (const officer of CentralArchives.allOfficers) {
            if (isEven && officer.getYearsOfService() % 2 === 0) {
                result.push(officer);
            }
            else if (!isEven && officer.getYearsOfService() % 2 !== 0) {
                result.push(officer);
            }
        }
        return result;
    }
    static getPoliceList() {
        // officers 중 Police 추출
        const result = [];
        for (const officer of CentralArchives.allOfficers) {
            if (officer instanceof Police) {
                result.push(officer);
            }
        }
        return result;
    }
    static getFirefighterList() {
        // officers 중 Firefighter 추출
        const result = [];
        for (const officer of CentralArchives.allOfficers) {
            if (officer instanceof Firefighter) {
                result.push(officer);
            }
        }
        return result;
    }
    static getDeveloperList() {
        const result = [];
        for (const officer of CentralArchives.allOfficers) {
            if (officer instanceof Developer) {
                result.push(officer);
            }
        }
        return result;
    }
}
//# sourceMappingURL=Exractor.js.map