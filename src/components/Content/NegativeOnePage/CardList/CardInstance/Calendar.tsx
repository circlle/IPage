import React from "react";
import CalendarPic from "./images/calendar-pic.png";

const Calendar = () => {
  return (
    <div
      className="calendar-card"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <div
        className="calendar-card-left"
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#999",
          fontSize: "0.8em",
        }}
      >
        <span style={{textAlign: "left"}}>今天无其他日程</span>
      </div>
      <div
        className="calendar-card-right"
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src={CalendarPic}
          style={{ width: "100%", height: "60%" }}
          alt="fake pic"
        />
      </div>
    </div>
  );
};

export default Calendar;
