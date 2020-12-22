import React from "react";
import SearchPic from "./search.png";
import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="search-box">
        <span style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
          <img
            style={{ height: "1.5em", width: "1.5em" }}
            src={SearchPic}
            alt="search"
          />
          <span>搜索</span>
        </span>
      </div>
    </div>
  );
};

export default Search;
