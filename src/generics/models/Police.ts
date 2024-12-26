import { PublicOfficer } from './PublicOfficer';

export class Police extends PublicOfficer {
    public introduce(): void {
        console.log(`I am Police Officer ${this.name}, serving for ${this.yearsOfService} years.`);
    }
}
