import { OfficerRequest, OfficerResult, PublicOfficerBaseCommand } from "../commands/PublicOfficerBaseCommand";

export class Police extends PublicOfficerBaseCommand {
    protected onExecute(dto: OfficerRequest): OfficerResult {
        const intro = `I am Police Officer ${dto.name}, serving for ${dto.yearsOfService} years.`;
        console.log(intro);
        return { introduction: intro };
    }
}

export class Firefighter extends PublicOfficerBaseCommand {
    protected onExecute(dto: OfficerRequest): OfficerResult {
        const intro = `I am Firefighter ${dto.name}, serving for ${dto.yearsOfService} years.`;
        console.log(intro);
        return { introduction: intro };
    }
}


