import { Developer } from "../models/Developer";
import { Firefighter } from "../models/Firefighter";
import { Police } from "../models/Police";
import { PublicOfficer } from "../models/PublicOfficer";
import { CentralArchives } from "./CentralArchives";

export class Extractor {
    private constructor() {}

    /**
     * 근속년수에 따라 짝수 또는 홀수 공무원을 반환
     * @param isEven 짝수 근속 여부
     * @returns 조건에 맞는 PublicOfficer 배열
     */
    public static getOfficersByServiceParity(isEven: boolean): PublicOfficer[] {
        return CentralArchives.allOfficers.filter(officer =>
            isEven ? officer.getYearsOfService() % 2 === 0 : officer.getYearsOfService() % 2 !== 0
        );
    }

    /**
     * 특정 타입의 공무원을 필터링하여 반환
     * @param type 필터링할 타입 (클래스)
     * @returns 해당 타입의 공무원 배열
     */
    public static getOfficersByType<T extends PublicOfficer>(type: new (...args: any[]) => T): T[] {
        return CentralArchives.allOfficers.filter(officer => officer instanceof type) as T[];
    }
}
