import React, { useState, useEffect, useRef } from "react";
import type { StandardTime } from "type";
import { useDateTime, useWindowClient } from "../../hooks";
import { Header } from "../common";
import "./lock.css";

export type LockPageProps = {
  setShowLock: (show: boolean) => void;
};
export default function LockPage(props: LockPageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  // 0 未拖动 ｜ 1 解锁拖动 ｜ 2 查看消息拖动
  const dragRef = useRef<"no" | "unlock" | "message">("no");
  const screen = useWindowClient();
  const [top, setTop] = useState(0);
  useEffect(() => {
    const pageWrapper = ref.current;
    if (pageWrapper) {
      const handleStart = (ev: TouchEvent) => {
        const { touches = [] } = ev;
        const firstTouch = touches[0];
        const needStart =
          (screen.height - firstTouch.clientY) / screen.height < 0.05;

        dragRef.current = needStart ? "unlock" : "message";

        // 判断位置， 只有距离底部足够近，才触发上滑的操作
      };
      const handleEnd = (ev: TouchEvent) => {
        if (dragRef.current === "unlock") {
          dragRef.current = "no";

          // 如果高于一半，则触发解锁
          const { changedTouches: touches = [] } = ev;
          const firstTouch = touches[0];
          const touchHeight = firstTouch.clientY;
          const needLock = touchHeight / screen.height < 0.5;
          if (needLock) {
            setTop(-1 * screen.height);
          } else {
            setTop(0);
          }
        }
      };
      const handleMove = (ev: TouchEvent) => {
        if (dragRef.current === "unlock") {
          const { touches = [] } = ev;
          const firstTouch = touches[0];
          const clientY = firstTouch.clientY;
          setTop((screen.height - clientY) * -1);
        }
      };
      pageWrapper.addEventListener("touchstart", handleStart, false);
      pageWrapper.addEventListener("touchmove", handleMove, false);
      pageWrapper.addEventListener("touchend", handleEnd, false);
      return () => {
        pageWrapper.removeEventListener("touchmove", handleMove, false);
        pageWrapper.removeEventListener("touchend", handleEnd, false);
        pageWrapper.removeEventListener("touchstart", handleStart, false);
      };
    }
  });
  useEffect(() => {
    const lockWrapper = dragRef.current;
    if (lockWrapper) {
      if (top !== 0) {
        props.setShowLock(false);
      }
    }
  }, []);
  return (
    <div
      id="lock-page"
      style={{ top, transition: dragRef.current === "unlock" ? "0s" : "" }}
      ref={ref}
    >
      <Header />
      <DateAndTime />
    </div>
  );
}

export type DateAndTimeProps = {};
export const DateAndTime = (props: DateAndTimeProps) => {
  const standardTime = useDateTime(1000);
  return (
    <div className="clock-wrapper">
      <Time time={standardTime} />
      <div className="clock-day">
        <DateCom time={standardTime} /> <Week time={standardTime} />
      </div>
    </div>
  );
};

export const DateCom = (props: { time: StandardTime }) => {
  const time = props.time;
  return <span>{`${time.month}月${time.day}日`}</span>;
};

export const Week = (props: { time: StandardTime }) => {
  const time = props.time;
  return <span>{`星期${time.weekText}`}</span>;
};

export const Time = (props: { time: StandardTime }) => {
  const time = props.time;
  return <span className="time">{`${time.hour}:${time.minute}`}</span>;
};
