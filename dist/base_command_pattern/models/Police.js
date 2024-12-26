import { PublicOfficerBaseCommand } from "../commands/PublicOfficerBaseCommand";
export class Police extends PublicOfficerBaseCommand {
    onExecute(dto) {
        const intro = `I am Police Officer ${dto.name}, serving for ${dto.yearsOfService} years.`;
        console.log(intro);
        return { introduction: intro };
    }
}
export class Firefighter extends PublicOfficerBaseCommand {
    onExecute(dto) {
        const intro = `I am Firefighter ${dto.name}, serving for ${dto.yearsOfService} years.`;
        console.log(intro);
        return { introduction: intro };
    }
}
//# sourceMappingURL=Police.js.map