import { CentralArchives } from "../services/CentralArchives";
import { PublicOfficerBaseCommand, OfficerRequest, OfficerResult } from "../commands/PublicOfficerBaseCommand";

export class TrainingService {
    public static trainOfficer<T extends PublicOfficerBaseCommand>(
        OfficerType: new () => T,          // 공무원 클래스 타입
        dto: OfficerRequest               // 공무원 생성에 필요한 요청 데이터
    ): OfficerResult {
        const officer = new OfficerType(); // 공무원 객체 생성
        const result = officer.execute(dto); // 객체 초기화 및 실행

        CentralArchives.register(officer);  // 중앙 저장소에 등록
        return result;                      // 생성 결과 반환
    }
}

