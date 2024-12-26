@echo off
:: 현재 디렉토리 기준으로 작업
set SRC_DIR=src

:: 폴더 생성
mkdir "%SRC_DIR%\models"
mkdir "%SRC_DIR%\services"
mkdir "%SRC_DIR%\utils"

:: PublicOfficer.ts
echo export abstract class PublicOfficer {>"%SRC_DIR%\models\PublicOfficer.ts"
echo.    public readonly name: string;>>"%SRC_DIR%\models\PublicOfficer.ts"
echo.    public readonly yearsOfService: number;>>"%SRC_DIR%\models\PublicOfficer.ts"
echo.>>"%SRC_DIR%\models\PublicOfficer.ts"
echo.    constructor(name: string, yearsOfService: number) {>>"%SRC_DIR%\models\PublicOfficer.ts"
echo.        this.name = name;>>"%SRC_DIR%\models\PublicOfficer.ts"
echo.        this.yearsOfService = yearsOfService;>>"%SRC_DIR%\models\PublicOfficer.ts"
echo.    }>>"%SRC_DIR%\models\PublicOfficer.ts"
echo.>>"%SRC_DIR%\models\PublicOfficer.ts"
echo.    public abstract introduce(): void;>>"%SRC_DIR%\models\PublicOfficer.ts"
echo.>>"%SRC_DIR%\models\PublicOfficer.ts"
echo.    public toString(): string {>>"%SRC_DIR%\models\PublicOfficer.ts"
echo.        return ^`Name: ${this.name}, Years of service: ${this.yearsOfService}^`;>>"%SRC_DIR%\models\PublicOfficer.ts"
echo.    }>>"%SRC_DIR%\models\PublicOfficer.ts"
echo.}>>"%SRC_DIR%\models\PublicOfficer.ts"

:: Police.ts
echo import { PublicOfficer } from './PublicOfficer';>"%SRC_DIR%\models\Police.ts"
echo.>>"%SRC_DIR%\models\Police.ts"
echo export class Police extends PublicOfficer {>>"%SRC_DIR%\models\Police.ts"
echo.    public introduce(): void {>>"%SRC_DIR%\models\Police.ts"
echo.        console.log(^`I am Police Officer ${this.name}, serving for ${this.yearsOfService} years.^`);>>"%SRC_DIR%\models\Police.ts"
echo.    }>>"%SRC_DIR%\models\Police.ts"
echo.}>>"%SRC_DIR%\models\Police.ts"

:: Firefighter.ts
echo import { PublicOfficer } from './PublicOfficer';>"%SRC_DIR%\models\Firefighter.ts"
echo.>>"%SRC_DIR%\models\Firefighter.ts"
echo export class Firefighter extends PublicOfficer {>>"%SRC_DIR%\models\Firefighter.ts"
echo.    public introduce(): void {>>"%SRC_DIR%\models\Firefighter.ts"
echo.        console.log(^`I am Firefighter ${this.name}, serving for ${this.yearsOfService} years.^`);>>"%SRC_DIR%\models\Firefighter.ts"
echo.    }>>"%SRC_DIR%\models\Firefighter.ts"
echo.}>>"%SRC_DIR%\models\Firefighter.ts"

:: MedicalResponder.ts
echo import { PublicOfficer } from './PublicOfficer';>"%SRC_DIR%\models\MedicalResponder.ts"
echo.>>"%SRC_DIR%\models\MedicalResponder.ts"
echo export class MedicalResponder extends PublicOfficer {>>"%SRC_DIR%\models\MedicalResponder.ts"
echo.    public introduce(): void {>>"%SRC_DIR%\models\MedicalResponder.ts"
echo.        console.log(^`I am Medical Responder ${this.name}, serving for ${this.yearsOfService} years.^`);>>"%SRC_DIR%\models\MedicalResponder.ts"
echo.    }>>"%SRC_DIR%\models\MedicalResponder.ts"
echo.}>>"%SRC_DIR%\models\MedicalResponder.ts"

:: TrainingCenter.ts
echo import { Police } from '../models/Police';>"%SRC_DIR%\services\TrainingCenter.ts"
echo import { Firefighter } from '../models/Firefighter';>>"%SRC_DIR%\services\TrainingCenter.ts"
echo import { MedicalResponder } from '../models/MedicalResponder';>>"%SRC_DIR%\services\TrainingCenter.ts"
echo import { CentralArchives } from './CentralArchives';>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.>>"%SRC_DIR%\services\TrainingCenter.ts"
echo export class TrainingCenter {>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.    private constructor() {}>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.    public static trainPolice(name: string, yearsOfService: number): Police {>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.        const police = new Police(name, yearsOfService);>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.        CentralArchives.register(police);>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.        return police;>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.    }>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.    public static trainFirefighter(name: string, yearsOfService: number): Firefighter {>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.        const firefighter = new Firefighter(name, yearsOfService);>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.        CentralArchives.register(firefighter);>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.        return firefighter;>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.    }>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.    public static trainMedicalResponder(name: string, yearsOfService: number): MedicalResponder {>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.        const responder = new MedicalResponder(name, yearsOfService);>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.        CentralArchives.register(responder);>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.        return responder;>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.    }>>"%SRC_DIR%\services\TrainingCenter.ts"
echo.}>>"%SRC_DIR%\services\TrainingCenter.ts"

echo 모든 파일과 폴더가 생성되었습니다!
