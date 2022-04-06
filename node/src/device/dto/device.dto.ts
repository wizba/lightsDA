export interface Device {
    readonly name?: string;
    readonly pin: number;
    readonly id?: number;
    readonly action: string;
    readonly color?: string;
}