import { PublicOfficerResult } from '../models/PublicOfficerResult';

/**
 * CentralArchives 클래스
 * - 공무원 데이터를 관리하는 정적 아카이브 역할을 합니다.
 * - 특정 직업 유형별로 공무원을 등록, 조회, 그룹화, 초기화할 수 있습니다.
 */
export default class CentralArchives {
    // 모든 공무원의 정보를 저장하는 정적 레지스트리
    private static registry: Record<string, PublicOfficerResult[]> = {};

    /**
     * 특정 직업 유형에 새로운 공무원을 등록합니다.
     * @param jobType - 직업 유형 (예: "police", "firefighter").
     * @param officer - 등록할 공무원 정보 (PublicOfficerResult 타입).
     */
    static register(jobType: string, officer: PublicOfficerResult): void {
        // 해당 직업 유형의 배열이 존재하지 않으면 초기화
        if (!this.registry[jobType]) {
            this.registry[jobType] = [];
        }
        // 직업 유형에 해당 공무원 추가
        this.registry[jobType].push(officer);
    }

    /**
     * 특정 직업 유형에 속한 모든 공무원을 조회합니다.
     * @param jobType - 조회할 직업 유형.
     * @returns 해당 직업 유형에 등록된 공무원의 배열.
     */
    static getOfficersByJob(jobType: string): PublicOfficerResult[] {
        // 직업 유형이 존재하지 않으면 빈 배열 반환
        return this.registry[jobType] || [];
    }

    /**
     * 모든 등록된 공무원을 직업 유형별로 그룹화하여 반환합니다.
     * @returns 직업 유형과 해당 공무원 목록의 매핑 객체.
     */
    static getAllOfficers(): Record<string, PublicOfficerResult[]> {
        return this.registry;
    }

    /**
     * 아카이브에서 모든 공무원 데이터를 초기화합니다.
     */
    static clear(): void {
        this.registry = {};
    }
}
