import { Police } from '../models/Police';
import { Firefighter } from '../models/Firefighter';
import { CentralArchives } from './CentralArchives';
import { PublicOfficer } from '../models/PublicOfficer';


export class TrainingCenter {
    private constructor() {}

    public static trainOfficer<T extends PublicOfficer>(
        OfficerType: new (name: string, yearsOfService: number) => T,
        name: string,
        yearsOfService: number
    ): T {
        const officer = new OfficerType(name, yearsOfService);
        CentralArchives.register(officer);
        return officer;
    }
}

