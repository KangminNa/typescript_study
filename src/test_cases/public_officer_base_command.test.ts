// 필요한 모듈과 클래스들을 import합니다.
import { PublicOfficerRequest } from "../police_base_command_pattern/src/models/PublicOfficerRequest";
import CentralArchives from "../police_base_command_pattern/src/services/CentralArchives";
import Police from "../police_base_command_pattern/src/services/Police";
import { TrainingCenter } from "../police_base_command_pattern/src/services/PublicOfficerAction";

// 테스트 스위트: Police 클래스의 동작을 검증하는 테스트 모음입니다.
describe('Police Class Tests', () => {
    // 각 테스트 실행 전에 중앙 저장소(CentralArchives)를 초기화합니다.
    beforeEach(() => {
        CentralArchives.clear(); // 중앙 저장소의 데이터를 초기화하여 테스트 간 독립성을 보장.
    });

    // 유효한 요청 처리 테스트
    it('should execute and register a police officer', () => {
        // Arrange: Police 클래스의 인스턴스를 생성하고 요청 데이터를 정의합니다.
        const policeAction = new Police(new TrainingCenter()); // Police 클래스는 TrainingCenter를 context로 받습니다.
        const request: PublicOfficerRequest = { name: 'John Doe', yearsOfService: 5 }; // 유효한 요청 데이터.

        // Act: execute 메서드를 호출하여 요청을 처리합니다.
        const result = policeAction.execute(request);

        // Assert: 처리 결과와 중앙 저장소 상태를 검증합니다.
        expect(result).toEqual({ name: 'John Doe', yearsOfService: 5 }); // 처리 결과가 올바른지 확인.
        
        const registeredOfficers = CentralArchives.getOfficersByJob('police'); // 'police' 타입으로 저장된 데이터 가져오기.
        expect(registeredOfficers).toHaveLength(1); // 등록된 경찰 데이터가 1개인지 확인.
        expect(registeredOfficers[0]).toEqual(result); // 저장된 데이터가 처리 결과와 동일한지 확인.
    });

    // 이름이 비어 있는 요청 처리 방지 테스트
    it('should not execute if the name is empty', () => {
        // Arrange: 이름이 비어 있는 요청 데이터를 정의합니다.
        const policeAction = new Police(new TrainingCenter());
        const request: PublicOfficerRequest = { name: '', yearsOfService: 5 }; // 이름이 없는 요청 데이터.

        // Act: execute 메서드를 호출하여 요청을 처리합니다.
        const result = policeAction.execute(request);

        // Assert: 처리되지 않았음을 검증합니다.
        expect(result).toBeNull(); // 결과가 null이어야 함.

        const registeredOfficers = CentralArchives.getOfficersByJob('police');
        expect(registeredOfficers).toHaveLength(0); // 중앙 저장소에 데이터가 등록되지 않았는지 확인.
    });

    // 근속 연수가 0 이하인 요청 처리 방지 테스트
    it('should not execute if yearsOfService is zero or less', () => {
        // Arrange: 근속 연수가 0 이하인 요청 데이터를 정의합니다.
        const policeAction = new Police(new TrainingCenter());
        const request: PublicOfficerRequest = { name: 'John Doe', yearsOfService: 0 }; // 근속 연수가 0인 요청.

        // Act: execute 메서드를 호출하여 요청을 처리합니다.
        const result = policeAction.execute(request);

        // Assert: 처리되지 않았음을 검증합니다.
        expect(result).toBeNull(); // 결과가 null이어야 함.

        const registeredOfficers = CentralArchives.getOfficersByJob('police');
        expect(registeredOfficers).toHaveLength(0); // 중앙 저장소에 데이터가 등록되지 않았는지 확인.
    });

    // 여러 요청을 처리하고 각각의 데이터가 저장되는지 확인
    it('should handle multiple police officers', () => {
        // Arrange: 여러 경찰 요청 데이터를 정의합니다.
        const policeAction = new Police(new TrainingCenter());
        const request1: PublicOfficerRequest = { name: 'John Doe', yearsOfService: 5 }; // 첫 번째 요청 데이터.
        const request2: PublicOfficerRequest = { name: 'Jane Smith', yearsOfService: 10 }; // 두 번째 요청 데이터.

        // Act: 각각의 요청을 처리합니다.
        const result1 = policeAction.execute(request1); // 첫 번째 요청 처리.
        const result2 = policeAction.execute(request2); // 두 번째 요청 처리.

        // Assert: 각각의 처리 결과와 중앙 저장소 상태를 검증합니다.
        expect(result1).toEqual({ name: 'John Doe', yearsOfService: 5 }); // 첫 번째 결과 검증.
        expect(result2).toEqual({ name: 'Jane Smith', yearsOfService: 10 }); // 두 번째 결과 검증.

        const registeredOfficers = CentralArchives.getOfficersByJob('police');
        expect(registeredOfficers).toHaveLength(2); // 중앙 저장소에 등록된 데이터가 2개인지 확인.
        expect(registeredOfficers).toContainEqual(result1); // 첫 번째 데이터가 저장소에 존재하는지 확인.
        expect(registeredOfficers).toContainEqual(result2); // 두 번째 데이터가 저장소에 존재하는지 확인.
    });
});
