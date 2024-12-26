import { Developer } from "../models/Developer";
import { Firefighter } from "../models/Firefighter";
import { Police } from "../models/Police";
import { PublicOfficer } from "../models/PublicOfficer";
import { CentralArchives } from "./CentralArchives";

export class Exractor {
    private constructor() {};


    // 근속년수에 따른 짝수와 홀수에 맞춰서 
    public static getOfficersByServiceParity(isEven: boolean): PublicOfficer[] {
        const result: PublicOfficer[] = [];
        for (const officer of CentralArchives.allOfficers) {
            if (isEven && officer.getYearsOfService() % 2 === 0) {
                result.push(officer);
            } else if (!isEven && officer.getYearsOfService() % 2 !== 0) {
                result.push(officer);
            }
        }
        return result;
    }

    public static getPoliceList(): Police[] {
        // officers 중 Police 추출
        const result: Police[] = [];
        for (const officer of CentralArchives.allOfficers) {
            if (officer instanceof Police) {
                result.push(officer);
            }
        }
        return result;

    }

    public static getFirefighterList(): Firefighter[] {
        // officers 중 Firefighter 추출
        const result: Firefighter[] = [];
        for (const officer of CentralArchives.allOfficers) {
            if (officer instanceof Firefighter) {
                result.push(officer);
            }
        }
        return result;
    }

    public static getDeveloperList(): Developer[] {
        const result: Developer[] = [];
        for(const officer of CentralArchives.allOfficers){
            if(officer instanceof Developer){
                result.push(officer);
            }
        }
        return result;
    }
}