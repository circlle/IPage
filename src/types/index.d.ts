export type StandardTime = {
  timestamp: number;
  year: string;
  month: string;
  day: string;
  week: string;
  weekText: string;
  hour: string;
  minute: string;
  second: string;
}

export type NetWork = {
  isp: "中国移动" | "中国联通";
  signalLevel: 0 | 1 | 2 | 3 | 4;
  type: "2G" | "3G" | "4G" | "5G" | "Wifi"
}