export interface TimePeriod {
  id: number;
  startTime: string;
  endTime: string;
}

export interface ISetupWeek {
  id: number;
  label: string;
  enabled: boolean;
  times: TimePeriod[];
}