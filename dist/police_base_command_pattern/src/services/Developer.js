import { PublicOfficerAction } from './PublicOfficerAction';
import CentralArchives from './CentralArchives';
import { TrainingCenter } from '../models/TrainingCenter';
export default class Developer extends PublicOfficerAction {
    onExecute(dto) {
        const trainingCenter = new TrainingCenter(dto.name, dto.yearsOfService, 'developer');
        const result = {
            name: trainingCenter.name,
            yearsOfService: trainingCenter.yearsOfService,
        };
        CentralArchives.register('developer', result);
        return result;
    }
}
//# sourceMappingURL=Developer.js.map