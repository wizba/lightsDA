export interface Schedule {
    scheduleId?: number;
    deviceId?: number;
    enabled: boolean;
    startTime: Date;
    endTime: Date;
}
