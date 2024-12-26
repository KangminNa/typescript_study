import { CentralArchives } from "../base_command_pattern/services/CentralArchives";
import { TrainingService } from "../base_command_pattern/services/TrainingService";
import { Firefighter, Police } from "../base_command_pattern/models/Police";

describe("TrainingService Tests", () => {
    afterEach(() => {
        // 각 테스트 후 중앙 저장소를 초기화합니다.
        CentralArchives.clear();
    });

    test("should train and register a Police officer", () => {
        const officerRequest = { name: "John Doe", yearsOfService: 5 };

        const result = TrainingService.trainOfficer(Police, officerRequest);

        // 결과 확인
        expect(result.introduction).toBe(
            `I am Police Officer John Doe, serving for 5 years.`
        );

        // 중앙 저장소에 등록 확인
        const officers = CentralArchives.allOfficers;
        expect(officers).toHaveLength(1);
        expect(officers[0]).toBeInstanceOf(Police);
        expect(officers[0].toString()).toBe("Name: John Doe, Years of Service: 5");
    });

    test("should train and register a Firefighter", () => {
        const officerRequest = { name: "Jane Smith", yearsOfService: 3 };

        const result = TrainingService.trainOfficer(Firefighter, officerRequest);

        // 결과 확인
        expect(result.introduction).toBe(
            `I am Firefighter Jane Smith, serving for 3 years.`
        );

        // 중앙 저장소에 등록 확인
        const officers = CentralArchives.allOfficers;
        expect(officers).toHaveLength(1);
        expect(officers[0]).toBeInstanceOf(Firefighter);
        expect(officers[0].toString()).toBe("Name: Jane Smith, Years of Service: 3");
    });

    test("should not register duplicate officers", () => {
        const officerRequest = { name: "Sam Lee", yearsOfService: 4 };

        const officer1 = TrainingService.trainOfficer(Police, officerRequest);
        const officer2 = TrainingService.trainOfficer(Police, officerRequest);

        // 중앙 저장소에는 중복된 객체가 등록되지 않아야 함
        const officers = CentralArchives.allOfficers;
        expect(officers).toHaveLength(1);

        // 동일한 정보로 생성했더라도 두 객체는 서로 다른 참조임
        expect(officer1).not.toBe(officer2);
    });

    test("should throw an error for invalid yearsOfService", () => {
        const invalidOfficerRequest = { name: "Invalid Officer", yearsOfService: 0 };
    
        expect(() => {
            TrainingService.trainOfficer(Police, invalidOfficerRequest);
        }).toThrowError("Execution not allowed: Invalid officer data.");
    });
    

    test("should register multiple officers of different types", () => {
        const policeRequest = { name: "Police Officer", yearsOfService: 5 };
        const firefighterRequest = { name: "Firefighter", yearsOfService: 7 };
    
        const policeOfficer = TrainingService.trainOfficer(Police, policeRequest);
        const firefighterOfficer = TrainingService.trainOfficer(Firefighter, firefighterRequest);
    
        const officers = CentralArchives.allOfficers;
    
        // 중앙 저장소에 올바르게 등록되었는지 확인
        expect(officers).toHaveLength(2);
    
        // officerData를 기준으로 비교
        expect(officers).toContainEqual(expect.objectContaining({ officerData: policeRequest }));
        expect(officers).toContainEqual(expect.objectContaining({ officerData: firefighterRequest }));
    });
    

    test("should handle clearing CentralArchives correctly", () => {
        const policeRequest = { name: "Officer 1", yearsOfService: 2 };
        const firefighterRequest = { name: "Officer 2", yearsOfService: 3 };

        TrainingService.trainOfficer(Police, policeRequest);
        TrainingService.trainOfficer(Firefighter, firefighterRequest);

        // 초기 등록된 Officer 확인
        expect(CentralArchives.allOfficers).toHaveLength(2);

        // 중앙 저장소 초기화
        CentralArchives.clear();

        // 저장소가 비어있는지 확인
        expect(CentralArchives.allOfficers).toHaveLength(0);
    });
});
