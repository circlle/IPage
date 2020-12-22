import { useEffect, useState } from "react";
import type { StandardTime } from "type";

const useDateTime = (step: number) => {
  const [time, setTime] = useState<StandardTime>(
    formatStandardTime(Date.now())
  );
  useEffect(() => {
    const timer = setInterval(
      () => [setTime(formatStandardTime(Date.now()))],
      step
    );
    return () => clearInterval(timer);
  });
  return time;
};

const formatStandardTime = (time: number | Date): StandardTime => {
  const date = time instanceof Date ? time : new Date(time);
  const timestamp = time instanceof Date ? time.getTime() : time;
  return {
    timestamp,
    year: date.getFullYear() + "",
    month: prefixWithZeroIfNeed(date.getMonth() + 1),
    day: prefixWithZeroIfNeed(date.getDate()),
    week: date.getDay() + "",
    weekText: ["一", '二', '三', '四', '五', '六', '日'][date.getDay() - 1],
    hour: prefixWithZeroIfNeed(date.getHours()),
    minute: prefixWithZeroIfNeed(date.getMinutes()),
    second: prefixWithZeroIfNeed(date.getSeconds()),
  };
};

const prefixWithZeroIfNeed = (num: number) => {
  const str = String(num);
  return str.length === 2 ? str : `0${str}`
}

export default useDateTime;
