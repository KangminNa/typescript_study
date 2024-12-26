import { PublicOfficer } from './PublicOfficer';

export class Developer extends PublicOfficer {
    public introduce(): void {
        console.log(`I am Developer Responder ${this.name}, serving for ${this.yearsOfService} years.`);
    }
}
