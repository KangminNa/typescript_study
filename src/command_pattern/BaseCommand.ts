// BaseCommand.ts
abstract class BaseCommand<TRequest, TResult, TContext> {
    protected context: TContext;
  
    constructor(context: TContext) {
      this.context = context;
    }
  
    execute(dto: TRequest): TResult {
      this.onConfigure(dto);
  
      if (this.canExecute(dto)) {
        return this.onExecute(dto);
      }
  
      // canExecute가 false일 때 명시적으로 false를 반환
      return false as unknown as TResult; 
      //return undefined as unknown as TResult;
    }
  
    protected onConfigure(dto: TRequest): void {}
  
    protected abstract canExecute(dto: TRequest): boolean;
  
    protected abstract onExecute(dto: TRequest): TResult;
  }
  
  export default BaseCommand;
  