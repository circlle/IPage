import React from "react";
import type { NetWork } from "type";
import { useNetWork } from "../../../hooks";
import "./header.css";

export type HeaderProps = {
  color?: string;
};
const Header = (props: HeaderProps) => {
  const { color = "#fff" } = props;
  let network: NetWork | null = useNetWork();

  return (
    <div className="header" style={{ color }}>
      <span>
        <Isp network={network} />
      </span>
      <span className="header-right">
        <Signal network={network} color={color}/>
        {" "}
        <NetType network={network} color={color}/>
      </span>
    </div>
  );
};
const NetType = (props: { network: NetWork | null, color: string }) => {
  if (!props.network) return <span>...</span>;

  return <span>{props.network.type}</span>;
};

const Signal = (props: { network: NetWork | null, color: string }) => {
  if (!props.network) return <span>...</span>;

  const level = props.network.signalLevel;

  return <Percentage count={level} color={props.color} />;
};

const Percentage = ({
  count,
  color = "#fff",
}: {
  count: number;
  color?: string;
}) => {
  if (count > 4) count = 4;
  return (
    <span>
      {[1, 2, 3, 4].map((item) => {
        return (
          <i
            key={item}
            style={{
              marginLeft: "0.1em",
              display: "inline-block",
              height: `${0.25 * item}em`,
              width: "0.25em",
              // backgroundColor: item > count ? "#ddd" : color,
              backgroundColor: color,
              opacity: item > count ? 0.5 : 1,
            }}
          ></i>
        );
      })}
    </span>
  );
};

const Isp = (props: { network: NetWork | null }) => {
  const isp = props?.network?.isp || "...";
  return <span>{isp}</span>;
};

export default Header;
