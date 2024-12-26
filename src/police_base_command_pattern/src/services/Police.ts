import { PublicOfficerAction } from '../services/PublicOfficerAction';
import CentralArchives from './CentralArchives';
import { PublicOfficerRequest } from '../models/PublicOfficerRequest';
import { PublicOfficerResult } from '../models/PublicOfficerResult';
import { TrainingCenter } from '../models/TrainingCenter';

/**
 * Police 클래스
 * - 경찰 직업 유형을 관리하기 위한 클래스.
 * - `PublicOfficerAction`을 상속받아 실행 로직을 구현합니다.
 */
export default class Police extends PublicOfficerAction {
    /**
     * 경찰에 대한 실행 로직을 구현합니다.
     * @param dto - 요청 데이터 (`PublicOfficerRequest` 타입).
     * @returns 실행 결과 (`PublicOfficerResult` 타입).
     */
    protected onExecute(dto: PublicOfficerRequest): PublicOfficerResult {
        // TrainingCenter 객체 생성 및 초기화
        const trainingCenter = new TrainingCenter(dto.name, dto.yearsOfService, 'police');
        
        // 결과 데이터 생성
        const result = {
            name: trainingCenter.name,
            yearsOfService: trainingCenter.yearsOfService,
        };
        
        // CentralArchives에 등록
        CentralArchives.register('police', result);
        
        // 결과 반환
        return result;
    }
}
