/**
 * PublicOfficerBaseCommand는 추상 클래스이며,
 * 명령(Command) 패턴을 기반으로 특정 로직을 실행하기 위한 기본 구조를 제공합니다.
 * 
 * @template TRequest 요청 데이터의 타입
 * @template TResult 실행 결과의 타입
 * @template TContext 명령 실행에 필요한 컨텍스트의 타입
 */
abstract class PublicOfficerBaseCommand<TRequest, TResult, TContext> {
    protected context: TContext;

    constructor(context: TContext) {
        this.context = context;
    }

    /**
     * 명령을 실행할 수 있다면 실행합니다.
     * @param dto - 요청 데이터
     * @returns 실행 결과를 반환하거나, 실행이 불가능한 경우 `null`을 반환합니다.
     */
    execute(dto: TRequest): TResult | null {
        this.onConfigure(dto);

        if (this.canExecute(dto)) {
            return this.onExecute(dto);
        }

        // 실행이 허용되지 않는 경우 명시적으로 `null`을 반환합니다.
        return null;
    }

    /**
     * 제공된 데이터를 사용하여 명령을 구성합니다.
     * 하위 클래스에서 이 메서드를 재정의하여 사용자 정의 구성 로직을 추가할 수 있습니다.
     * @param dto - 요청 데이터
     */
    protected onConfigure(dto: TRequest): void {}

    /**
     * 명령을 실행할 수 있는지 여부를 결정합니다.
     * @param dto - 요청 데이터
     * @returns `true`이면 명령을 실행할 수 있고, 그렇지 않으면 `false`를 반환합니다.
     */
    protected abstract canExecute(dto: TRequest): boolean;

    /**
     * 명령의 주요 로직을 실행합니다.
     * @param dto - 요청 데이터
     * @returns 실행 결과를 반환합니다.
     */
    protected abstract onExecute(dto: TRequest): TResult;
}

export default PublicOfficerBaseCommand;
