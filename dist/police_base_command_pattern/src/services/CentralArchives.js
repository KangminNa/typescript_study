export default class CentralArchives {
    static registry = {};
    /**
     * Registers a new officer under a specific job type.
     * @param jobType - The type of job (e.g., "police", "firefighter").
     * @param officer - The officer details to register.
     */
    static register(jobType, officer) {
        if (!this.registry[jobType]) {
            this.registry[jobType] = [];
        }
        this.registry[jobType].push(officer);
    }
    /**
     * Retrieves all officers of a specific job type.
     * @param jobType - The type of job to filter by.
     * @returns An array of officers of the specified job type.
     */
    static getOfficersByJob(jobType) {
        return this.registry[jobType] || [];
    }
    /**
     * Retrieves all registered officers grouped by job type.
     * @returns A record of job types and their officers.
     */
    static getAllOfficers() {
        return this.registry;
    }
    /**
     * Clears all registered officers from the archive.
     */
    static clear() {
        this.registry = {};
    }
}
//# sourceMappingURL=CentralArchives.js.map