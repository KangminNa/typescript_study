import { PublicOfficerAction } from '../services/PublicOfficerAction';
import CentralArchives from './CentralArchives';
import { TrainingCenter } from '../models/TrainingCenter';
export default class Police extends PublicOfficerAction {
    onExecute(dto) {
        const trainingCenter = new TrainingCenter(dto.name, dto.yearsOfService, 'police');
        const result = {
            name: trainingCenter.name,
            yearsOfService: trainingCenter.yearsOfService,
        };
        CentralArchives.register('police', result);
        return result;
    }
}
//# sourceMappingURL=Police.js.map