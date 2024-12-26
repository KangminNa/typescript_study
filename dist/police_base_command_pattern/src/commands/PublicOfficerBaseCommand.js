class PublicOfficerBaseCommand {
    context;
    constructor(context) {
        this.context = context;
    }
    /**
     * Executes the command if it can be executed.
     * @param dto - The request data.
     * @returns The result of execution, or null if it cannot execute.
     */
    execute(dto) {
        this.onConfigure(dto);
        if (this.canExecute(dto)) {
            return this.onExecute(dto);
        }
        // Return `null` explicitly if the execution is not allowed.
        return null;
    }
    /**
     * Configures the command with the provided data.
     * This can be overridden by subclasses for custom configuration logic.
     * @param dto - The request data.
     */
    onConfigure(dto) { }
}
export default PublicOfficerBaseCommand;
//# sourceMappingURL=PublicOfficerBaseCommand.js.map