import PublicOfficerBaseCommand from '../commands/PublicOfficerBaseCommand';
export class TrainingCenter {
    name;
    yearsOfService;
    type;
    constructor(name = '', yearsOfService = 0, type = 'general') {
        this.name = name;
        this.yearsOfService = yearsOfService;
        this.type = type;
    }
    getDescription() {
        return `${this.type} Training Center for ${this.name} (${this.yearsOfService} years of service)`;
    }
}
// 공통 동작 정의
export class PublicOfficerAction extends PublicOfficerBaseCommand {
    trainingCenter = null;
    canExecute(dto) {
        // 이름과 근속 연수가 유효한 경우에만 실행 가능
        return dto.name.trim() !== '' && dto.yearsOfService > 0;
    }
    onConfigure(dto) {
        // TrainingCenter 객체를 준비
        this.trainingCenter = this.prepareTrainingCenter(dto);
        console.log(`Configuring PublicOfficerAction for: ${dto.name}`);
    }
    onExecute(dto) {
        if (!this.trainingCenter) {
            throw new Error('TrainingCenter is not configured. Please call onConfigure first.');
        }
        console.log(`Executing action for TrainingCenter: ${this.trainingCenter.getDescription()}`);
        return {
            name: this.trainingCenter.name,
            yearsOfService: this.trainingCenter.yearsOfService,
        };
    }
    prepareTrainingCenter(dto) {
        // TrainingCenter를 생성하는 로직 분리
        return new TrainingCenter(dto.name, dto.yearsOfService, 'general');
    }
}
//# sourceMappingURL=PublicOfficerAction.js.map