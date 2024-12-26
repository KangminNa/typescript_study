// BaseCommand.ts
class BaseCommand {
    context;
    constructor(context) {
        this.context = context;
    }
    execute(dto) {
        this.onConfigure(dto);
        if (this.canExecute(dto)) {
            return this.onExecute(dto);
        }
        // canExecute가 false일 때 명시적으로 false를 반환
        return false;
        //return undefined as unknown as TResult;
    }
    onConfigure(dto) { }
}
export default BaseCommand;
//# sourceMappingURL=BaseCommand.js.map