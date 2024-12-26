import { PublicOfficer } from '../models/PublicOfficer';

export class CentralArchives {
    
    private static officers: PublicOfficer[] = [];

    private constructor() {}

    public static clear(): void {
        this.officers = [];
    }

    public static get allOfficers(): ReadonlyArray<PublicOfficer> {
        // officers 반환
        return this.officers as ReadonlyArray<PublicOfficer>;
    }

    public static register(officer: PublicOfficer): void {
        if(!this.officers.includes(officer)){
            // officer 추가
            this.officers.push(officer);
        }
    }

    public static remove(officer: PublicOfficer): void {
        const index = this.officers.indexOf(officer);
        if(index > -1){
            // officer 제거
            this.officers.splice(index, 1);
        }
    }

}