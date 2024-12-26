// TvRemoteController.ts
import BaseCommand from './BaseCommand';
class TeleVision {
    powerOn;
    volume;
    channel;
    constructor() {
        this.powerOn = false;
        this.volume = 0;
        this.channel = 0;
    }
}
// RemoteControlAction.ts (기본 액션 클래스)
class RemoteControlAction extends BaseCommand {
    canExecute(dto) {
        return true;
    }
    onExecute(dto) {
        console.log("Action executed on TV");
        return true;
    }
}
// ToggleAction.ts (전원 토글 액션)
class ToggleAction extends RemoteControlAction {
    onExecute(dto) {
        super.onExecute(dto);
        this.context.powerOn = !this.context.powerOn;
        console.log(`TV power is now ${this.context.powerOn ? 'ON' : 'OFF'}`);
        return this.context.powerOn;
    }
}
// VolumeAction.ts (볼륨 조정 액션)
class VolumeAction extends RemoteControlAction {
    canExecute(dto) {
        return this.context.powerOn; // 텔레비전이 켜져 있을 때만 실행
    }
    onExecute(dto) {
        if (!this.context.powerOn) {
            return false; // TV가 꺼져 있으면 볼륨 조정이 불가능하므로 false 반환
        }
        const isUp = dto.volume_up || false;
        this.context.volume += isUp ? 1 : -1;
        console.log(`Current volume: ${this.context.volume}`);
        return true; // 볼륨이 변경되었으므로 true 반환
    }
}
// ChannelAction.ts (채널 변경 액션)
class ChannelAction extends RemoteControlAction {
    canExecute(dto) {
        return this.context.powerOn; // 텔레비전이 켜져 있을 때만 실행
    }
    onExecute(dto) {
        if (!this.context.powerOn) {
            return false; // TV가 꺼져 있으면 채널 변경이 불가능하므로 false 반환
        }
        // 부모 클래스의 onExecute 호출
        if (!super.onExecute(dto)) {
            return false; // 부모 클래스가 false를 반환하면 실행되지 않음
        }
        if (dto.channel_number !== undefined) {
            this.context.channel = dto.channel_number;
            console.log(`Channel changed to: ${this.context.channel}`);
            return true;
        }
        return false; // channel_number가 없는 경우 false 반환
    }
}
export { TeleVision, RemoteControlAction, ToggleAction, VolumeAction, ChannelAction };
//# sourceMappingURL=TvRemoteController%20.js.map