import { TeleVision, ToggleAction, VolumeAction, ChannelAction } from "../command_pattern/TvRemoteController ";

describe("Logger", () => {
  test.todo("주석을 해제해주세요");
});


// describe('TV Remote Controller', () => {
//   let tv: TeleVision;
//   let toggleAction: ToggleAction;
//   let volumeAction: VolumeAction;
//   let channelAction: ChannelAction;

//   beforeEach(() => {
//     tv = new TeleVision(); // 새로운 TV 객체 생성
//     toggleAction = new ToggleAction(tv); // ToggleAction 생성
//     volumeAction = new VolumeAction(tv); // VolumeAction 생성
//     channelAction = new ChannelAction(tv); // ChannelAction 생성
//   });

//   test('should toggle TV power on and off', () => {
//     toggleAction.execute({}); // TV 켜기
//     expect(tv.powerOn).toBe(true); // TV가 켜졌는지 확인

//     toggleAction.execute({}); // TV 끄기
//     expect(tv.powerOn).toBe(false); // TV가 꺼졌는지 확인
//   });

//   test('should increase volume when TV is on', () => {
//     toggleAction.execute({}); // TV 켜기
//     expect(tv.powerOn).toBe(true); // TV가 켜졌는지 확인

//     volumeAction.execute({ volume_up: true }); // 볼륨 올리기
//     expect(tv.volume).toBe(1); // 볼륨이 1로 증가했는지 확인
//   });

//   test('should not adjust volume when TV is off', () => {
//     tv.powerOn = false; // TV 끄기
//     expect(tv.powerOn).toBe(false); // TV가 꺼졌는지 확인

//     const result = volumeAction.execute({ volume_up: true }); // 볼륨 올리기 시도
//     expect(tv.volume).toBe(0); // 볼륨은 그대로 0이어야 함
//     expect(result).toBe(false); // 볼륨 조정이 실패해야 함
//   });

//   test('should change channel when TV is on', () => {
//     toggleAction.execute({}); // TV 켜기
//     expect(tv.powerOn).toBe(true); // TV가 켜졌는지 확인

//     channelAction.execute({ channel_number: 5 }); // 채널 변경
//     expect(tv.channel).toBe(5); // 채널이 5로 변경되었는지 확인
//   });

//   test('should not change channel when TV is off', () => {
//     tv.powerOn = false; // TV 끄기
//     expect(tv.powerOn).toBe(false); // TV가 꺼졌는지 확인

//     const result = channelAction.execute({ channel_number: 10 }); // 채널 변경 시도
//     expect(tv.channel).toBe(0); // 채널은 변경되지 않아야 함
//     expect(result).toBe(false); // 채널 변경이 실패해야 함
//   });

//   test('should execute ToggleAction when TV is off', () => {
//     tv.powerOn = false; // TV 끄기
//     expect(tv.powerOn).toBe(false);

//     const result = toggleAction.execute({}); // TV 전원 토글
//     expect(tv.powerOn).toBe(true); // TV가 켜져야 함
//     expect(result).toBe(true); // 토글이 성공했음을 확인
//   });

//   test('should not execute any action when TV is off for VolumeAction and ChannelAction', () => {
//     tv.powerOn = false; // TV 끄기
//     expect(tv.powerOn).toBe(false);

//     const volumeResult = volumeAction.execute({ volume_up: true });
//     const channelResult = channelAction.execute({ channel_number: 5 });

//     expect(tv.volume).toBe(0); // 볼륨은 변경되지 않아야 함
//     expect(tv.channel).toBe(0); // 채널은 변경되지 않아야 함

//     expect(volumeResult).toBe(false); // 볼륨 조정이 실패해야 함
//     expect(channelResult).toBe(false); // 채널 변경이 실패해야 함
//   });
// });
