import { Police } from "../generics/models/Police";
import { Firefighter } from '../generics/models/Firefighter';
import { Developer } from '../generics/models/Developer';
import { CentralArchives } from '../generics/services/CentralArchives';

import { TrainingCenter } from "../generics/services/TrainingCenter";
import { Extractor } from "../generics/services/Exractor";

describe("PublicOfficer and subclasses", () => {
    afterEach(() => {
        CentralArchives.clear(); // 각 테스트 후 중앙 저장소 초기화
        console.log("CentralArchives cleared");
    });

    test("should create and register a Police officer", () => {
        const officer = new Police("John Doe", 5);
        CentralArchives.register(officer);
        console.log("Police officer registered:", officer);

        const officers = CentralArchives.allOfficers;
        console.log("Current CentralArchives officers:", officers);

        expect(officers).toContain(officer);
    });

    test("Police officer should introduce correctly", () => {
        const officer = new Police("Jane Doe", 3);
        const consoleSpy = jest.spyOn(console, "log");

        officer.introduce();
        console.log("Officer introduced");

        expect(consoleSpy).toHaveBeenCalledWith(
            `I am Police Officer Jane Doe, serving for 3 years.`
        );

        consoleSpy.mockRestore();
    });

    test("should remove an officer from CentralArchives", () => {
        const officer = new Police("Mark Smith", 7);
        CentralArchives.register(officer);
        console.log("Officer registered before removal:", officer);

        CentralArchives.remove(officer);
        console.log("Officer removed:", officer);

        const officers = CentralArchives.allOfficers;
        console.log("Current CentralArchives officers:", officers);

        expect(officers).not.toContain(officer);
    });
});

describe("Extractor", () => {
    beforeEach(() => {
        CentralArchives.clear(); // 초기화
        console.log("CentralArchives cleared");
    });

    test("getOfficersByServiceParity - 홀수 근속 연수 추출", () => {
        const officer1 = new Police("John Doe", 3);
        const officer2 = new Firefighter("Jane Smith", 4);
        const officer3 = new Developer("Dev John", 5);

        CentralArchives.register(officer1);
        CentralArchives.register(officer2);
        CentralArchives.register(officer3);

        console.log("Registered officers:", CentralArchives.allOfficers);

        const result = Extractor.getOfficersByServiceParity(false);
        console.log("Extracted odd-year officers:", result);

        expect(result).toContain(officer1);
        expect(result).toContain(officer3);
        expect(result).not.toContain(officer2);
    });

    test("getOfficersByServiceParity - 짝수 근속 연수 추출", () => {
        const officer1 = new Police("John Doe", 3);
        const officer2 = new Firefighter("Jane Smith", 4);
        const officer3 = new Developer("Dev John", 6);

        CentralArchives.register(officer1);
        CentralArchives.register(officer2);
        CentralArchives.register(officer3);

        console.log("Registered officers:", CentralArchives.allOfficers);

        const result = Extractor.getOfficersByServiceParity(true);
        console.log("Extracted even-year officers:", result);

        expect(result).toContain(officer2);
        expect(result).toContain(officer3);
        expect(result).not.toContain(officer1);
    });

    describe("Extractor", () => {
        beforeEach(() => {
            // 테스트 전 CentralArchives 초기화
            CentralArchives.clear();
        });
    
        test("getPoliceList - Police만 추출", () => {
            const police1 = new Police("John Doe", 5);
            const firefighter = new Firefighter("Jane Smith", 3);
            const police2 = new Police("Mike Lee", 7);
    
            CentralArchives.register(police1);
            CentralArchives.register(firefighter);
            CentralArchives.register(police2);
    
            console.log("Registered officers:", CentralArchives.allOfficers);
    
            const result = Extractor.getOfficersByType(Police);
            console.log("Extracted police officers:", result);
    
            expect(result).toContain(police1);
            expect(result).toContain(police2);
            expect(result).not.toContain(firefighter);
        });
    
        test("getFirefighterList - Firefighter만 추출", () => {
            const firefighter1 = new Firefighter("Jane Smith", 3);
            const police = new Police("John Doe", 5);
            const firefighter2 = new Firefighter("Mike Lee", 7);
    
            CentralArchives.register(firefighter1);
            CentralArchives.register(police);
            CentralArchives.register(firefighter2);
    
            console.log("Registered officers:", CentralArchives.allOfficers);
    
            const result = Extractor.getOfficersByType(Firefighter);
            console.log("Extracted firefighters:", result);
    
            expect(result).toContain(firefighter1);
            expect(result).toContain(firefighter2);
            expect(result).not.toContain(police);
        });
    
        test("getDeveloperList - Developer만 추출", () => {
            const developer1 = new Developer("Dev John", 3);
            const developer2 = new Developer("Dev Jane", 5);
            const police = new Police("John Doe", 7);
    
            CentralArchives.register(developer1);
            CentralArchives.register(developer2);
            CentralArchives.register(police);
    
            console.log("Registered officers:", CentralArchives.allOfficers);
    
            const result = Extractor.getOfficersByType(Developer);
            console.log("Extracted developers:", result);
    
            expect(result).toContain(developer1);
            expect(result).toContain(developer2);
            expect(result).not.toContain(police);
        });
    });
});  

describe("TrainingCenter", () => {
    afterEach(() => {
        // 각 테스트 후 중앙 저장소를 초기화합니다.
        CentralArchives.clear();
    });

    test("should train and register a Police officer", () => {
        const officerName = "John Doe";
        const yearsOfService = 5;

        const officer = TrainingCenter.trainOfficer(Police, officerName, yearsOfService);

        // Officer 생성 검증
        expect(officer).toBeInstanceOf(Police);
        expect(officer.name).toBe(officerName);
        expect(officer.getYearsOfService()).toBe(yearsOfService);

        // Officer 등록 검증
        const officers = CentralArchives.allOfficers;
        expect(officers).toContain(officer);
    });

    test("should train and register a Firefighter", () => {
        const officerName = "Jane Smith";
        const yearsOfService = 7;

        const officer = TrainingCenter.trainOfficer(Firefighter, officerName, yearsOfService);

        // Officer 생성 검증
        expect(officer).toBeInstanceOf(Firefighter);
        expect(officer.name).toBe(officerName);
        expect(officer.getYearsOfService()).toBe(yearsOfService);

        // Officer 등록 검증
        const officers = CentralArchives.allOfficers;
        expect(officers).toContain(officer);
    });

    test("should not register duplicate officers", () => {
        const officerName = "Sam Lee";
        const yearsOfService = 3;

        const officer1 = TrainingCenter.trainOfficer(Police, officerName, yearsOfService);
        const officer2 = TrainingCenter.trainOfficer(Police, officerName, yearsOfService);

        // Officer 등록 검증
        const officers = CentralArchives.allOfficers;

        // 등록된 Officer는 하나여야 함
        expect(officers.filter(o => o.name === officerName && o.getYearsOfService() === yearsOfService)).toHaveLength(1);

        // 두 번째 생성된 Officer는 동일하지만 참조가 다름
        expect(officer1).not.toBe(officer2);
    });
});
