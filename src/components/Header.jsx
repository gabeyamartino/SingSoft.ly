import { useState } from "react";
import { Link } from "react-router-dom";
import convertTime from "../methods/convertTime.js";

const Header = ({ showInfo, trackInfo }) => {
  console.log("Show info in header, ", showInfo);

  return (
    <div className="sticky top-0 z-50 flex justify-between bg-gray-300 p-2">
      <div>
        <Link to="/" className="text-2xl">
          SingSoft.ly
        </Link>
        {Object.keys(showInfo).length > 0 && (
          <Link to={`/show/${showInfo.date}`} className="mt-2" state={showInfo}>
            <div className="">
              {showInfo.date.slice(5, 7)}.{showInfo.date.slice(-2)}.
              {showInfo.date.slice(0, 4)}
            </div>
            {/* <div className="">{showInfo.venue.name}</div> */}
            <div className="text-sm">{showInfo.venue.location}</div>
          </Link>
        )}
      </div>

      <div>
        <div>{trackInfo.title}</div>
        {trackInfo.title ? <div>{convertTime(trackInfo.duration)}</div> : null}
      </div>
    </div>
  );
};

export default Header;
