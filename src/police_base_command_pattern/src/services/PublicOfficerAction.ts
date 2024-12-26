import PublicOfficerBaseCommand from '../commands/PublicOfficerBaseCommand';
import { PublicOfficerRequest } from '../models/PublicOfficerRequest';
import { PublicOfficerResult } from '../models/PublicOfficerResult';
import { TrainingCenter } from '../models/TrainingCenter';

// 공통 동작 정의
/**
 * PublicOfficerAction 클래스
 * - `PublicOfficerBaseCommand`를 상속받아 공무원 동작에 대한 구체적인 로직을 구현합니다.
 * - `PublicOfficerRequest`를 요청 데이터로, `PublicOfficerResult`를 결과 데이터로 사용합니다.
 * - `TrainingCenter`를 컨텍스트로 사용하여 실행 로직을 지원합니다.
 */
export class PublicOfficerAction extends PublicOfficerBaseCommand<
    PublicOfficerRequest,  // 요청 데이터의 타입
    PublicOfficerResult,   // 결과 데이터의 타입
    TrainingCenter         // 명령 실행 시 사용할 컨텍스트
> {
    private trainingCenter: TrainingCenter | null = null;

    /**
     * 명령 실행 가능 여부를 판단합니다.
     * 요청 데이터가 유효한 경우에만 명령을 실행할 수 있습니다.
     * @param dto - 요청 데이터 (`PublicOfficerRequest` 타입)
     * @returns 요청 데이터가 유효하면 `true`, 그렇지 않으면 `false`
     */
    protected canExecute(dto: PublicOfficerRequest): boolean {
        // 이름이 비어 있지 않고, 근속 연수가 0보다 큰 경우 실행 가능
        return dto.name.trim() !== '' && dto.yearsOfService > 0;
    }

    /**
     * 명령 실행 전 초기 설정을 수행합니다.
     * `TrainingCenter` 객체를 생성하고, 이를 명령에 구성합니다.
     * @param dto - 요청 데이터 (`PublicOfficerRequest` 타입)
     */
    protected onConfigure(dto: PublicOfficerRequest): void {
        // TrainingCenter 객체를 준비합니다.
        this.trainingCenter = this.prepareTrainingCenter(dto);
        console.log(`Configuring PublicOfficerAction for: ${dto.name}`);
    }

    /**
     * 명령 실행의 주요 로직을 처리합니다.
     * 구성된 `TrainingCenter`를 기반으로 결과 데이터를 생성하고 반환합니다.
     * @param dto - 요청 데이터 (`PublicOfficerRequest` 타입)
     * @returns 실행 결과 (`PublicOfficerResult` 타입)
     */
    protected onExecute(dto: PublicOfficerRequest): PublicOfficerResult {
        // TrainingCenter가 구성되지 않은 경우 오류를 발생시킵니다.
        if (!this.trainingCenter) {
            throw new Error('TrainingCenter is not configured. Please call onConfigure first.');
        }

        // TrainingCenter의 설명을 출력합니다.
        console.log(`Executing action for TrainingCenter: ${this.trainingCenter.getDescription()}`);

        // 결과 객체를 반환합니다.
        return {
            name: this.trainingCenter.name,
            yearsOfService: this.trainingCenter.yearsOfService,
        };
    }

    /**
     * 요청 데이터를 바탕으로 `TrainingCenter` 객체를 생성합니다.
     * @param dto - 요청 데이터 (`PublicOfficerRequest` 타입)
     * @returns 생성된 `TrainingCenter` 객체
     */
    private prepareTrainingCenter(dto: PublicOfficerRequest): TrainingCenter {
        // TrainingCenter 객체를 생성하는 로직을 분리하여 재사용 가능하게 구성
        return new TrainingCenter(dto.name, dto.yearsOfService, 'general');
    }
}
