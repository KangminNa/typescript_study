import PublicOfficerBaseCommand from '../commands/PublicOfficerBaseCommand';
export default class Firefighter extends PublicOfficerBaseCommand {
    constructor(context) {
        super(context); // 부모 클래스에 context 전달
    }
    canExecute(dto) {
        return dto.name.trim() !== '' && dto.yearsOfService > 0;
    }
    onExecute(dto) {
        return {
            name: dto.name,
            yearsOfService: dto.yearsOfService,
        };
    }
}
//# sourceMappingURL=Firefighter.js.map