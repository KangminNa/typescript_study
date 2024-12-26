import { PublicOfficer } from './PublicOfficer';

export class Firefighter extends PublicOfficer {
    public introduce(): void {
        console.log(`I am Firefighter ${this.name}, serving for ${this.yearsOfService} years.`);
    }
}
