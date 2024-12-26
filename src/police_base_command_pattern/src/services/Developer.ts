import { PublicOfficerAction } from './PublicOfficerAction'; 
import CentralArchives from './CentralArchives';
import { PublicOfficerRequest } from '../models/PublicOfficerRequest';
import { PublicOfficerResult } from '../models/PublicOfficerResult';
import { TrainingCenter } from '../models/TrainingCenter';

/**
 * Developer 클래스
 * - 개발자 직업 유형을 관리하기 위한 클래스.
 * - `PublicOfficerAction`을 상속받아 실행 로직을 구현합니다.
 */
export default class Developer extends PublicOfficerAction {
    /**
     * 개발자에 대한 실행 로직을 구현합니다.
     * @param dto - 요청 데이터 (`PublicOfficerRequest` 타입).
     * @returns 실행 결과 (`PublicOfficerResult` 타입).
     */
    protected onExecute(dto: PublicOfficerRequest): PublicOfficerResult {
        // TrainingCenter 객체 생성 및 초기화
        const trainingCenter = new TrainingCenter(dto.name, dto.yearsOfService, 'developer');
        
        // 결과 데이터 생성
        const result = {
            name: trainingCenter.name,
            yearsOfService: trainingCenter.yearsOfService,
        };
        
        // CentralArchives에 등록
        CentralArchives.register('developer', result);
        
        // 결과 반환
        return result;
    }
}
