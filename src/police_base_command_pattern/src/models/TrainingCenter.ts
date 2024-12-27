
/**
 * TrainingCenter 클래스
 * - 훈련 센터에 대한 정보를 저장하는 단순 데이터 모델입니다.
 * - 이름, 근속 연수, 유형과 같은 속성을 관리하며, 설명을 반환하는 메서드를 제공합니다.
 */
export class TrainingCenter {
    name: string;
    yearsOfService: number;
    type: string;

    constructor(name: string = '', yearsOfService: number = 0, type: string = 'general') {
        this.name = name;
        this.yearsOfService = yearsOfService;
        this.type = type;
    }

    /**
     * TrainingCenter 객체에 대한 설명을 생성합니다.
     * @returns 훈련 센터의 이름, 근속 연수 및 유형을 포함한 설명 문자열
     */
    getDescription(): string {
        return `${this.type} Training Center for ${this.name} (${this.yearsOfService} years of service)`;
    }
}
