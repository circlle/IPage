import React from "react";
import "./mask.css";

const Mask: React.FC = (props) => {
  return (
    <>
      <div className="mask"></div>
      <div className="mask-content">{props.children}</div>
    </>
  );
};

export default Mask;
