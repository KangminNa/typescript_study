import PublicOfficerBaseCommand from '../commands/PublicOfficerBaseCommand';
import { PublicOfficerRequest } from '../models/PublicOfficerRequest';
import { PublicOfficerResult } from '../models/PublicOfficerResult';
import { TrainingCenter } from '../models/TrainingCenter';

/**
 * Firefighter 클래스
 * - 소방관 직업 유형을 관리하기 위한 클래스.
 * - `PublicOfficerBaseCommand`를 상속받아 실행 로직을 구현합니다.
 */
export default class Firefighter extends PublicOfficerBaseCommand<
    PublicOfficerRequest,  // 요청 데이터 타입
    PublicOfficerResult,   // 결과 데이터 타입
    TrainingCenter         // 실행 컨텍스트 타입
> {
    /**
     * Firefighter 클래스 생성자
     * @param context - 실행 컨텍스트 (`TrainingCenter` 타입).
     */
    constructor(context: TrainingCenter) {
        super(context); // 부모 클래스에 context 전달
    }

    /**
     * 명령 실행 가능 여부를 판단합니다.
     * @param dto - 요청 데이터 (`PublicOfficerRequest` 타입).
     * @returns 요청 데이터가 유효하면 `true`, 그렇지 않으면 `false`.
     */
    protected canExecute(dto: PublicOfficerRequest): boolean {
        // 이름이 비어 있지 않고 근속 연수가 0보다 크면 실행 가능
        return dto.name.trim() !== '' && dto.yearsOfService > 0;
    }

    /**
     * 소방관에 대한 실행 로직을 구현합니다.
     * @param dto - 요청 데이터 (`PublicOfficerRequest` 타입).
     * @returns 실행 결과 (`PublicOfficerResult` 타입).
     */
    protected onExecute(dto: PublicOfficerRequest): PublicOfficerResult {
        return {
            name: dto.name,                   // 요청 데이터의 이름
            yearsOfService: dto.yearsOfService, // 요청 데이터의 근속 연수
        };
    }
}
