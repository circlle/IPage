import React from "react";
import airpods from "./images/airpods.png";
import phone from "./images/phone.png";

const picMap: Record<Device, string> = {
  phone,
  box: airpods,
  left: "",
  right: "",
};

type Device = "phone" | "left" | "right" | "box";
const powerDataList: {
  progress: number;
  device: Device;
}[] = [
  { progress: 90, device: "phone" },
  { progress: 100, device: "box" },
  { progress: 0, device: "left" },
  { progress: 0, device: "right" },
];
const Power: React.FC = () => {
  return (
    <div
      className="power-card"
      style={{
        width: "100%",
        backgroundColor: "#eee",
        opacity: 0.6,
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
      }}
    >
      {powerDataList.map((powerData) => {
        return (
          <PowerItem
            progress={powerData.progress}
            device={powerData.device}
            key={powerData.device}
          />
        );
      })}
    </div>
  );
};

const PowerItem = ({
  progress,
  device,
}: {
  progress: number;
  device: Device;
}) => {
  return (
    <div
      style={{
        width: "25%",
        flexShrink: 0,

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Graph radius={40} stroke={6} progress={progress} device={device} />
      <div style={{ marginTop: "0.5em" }}>
        <Percentage percentage={progress} />
      </div>
    </div>
  );
};

const Graph = ({
  radius,
  stroke,
  progress,
  device,
}: {
  device: Device;
  radius: number;
  stroke: number;
  progress: number;
}) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div style={{ position: "relative" }}>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#aaa"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="green"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{
            strokeDashoffset,
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      {picMap[device] && (
        <img
          style={{
            position: "absolute",
            width: "1.6em",
            height: "1.6em",
            left: "50%",
            top: "50%",
            marginLeft: "-0.8em",
            marginTop: "-0.8em"
          }}
          src={picMap[device]}
          alt={device}
        />
      )}
    </div>
  );
};

const Percentage = ({ percentage }: { percentage: number }) => {
  return <span>{`${percentage}%`}</span>;
};

export default Power;
