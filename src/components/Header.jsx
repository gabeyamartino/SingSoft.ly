import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPlayCircle,
  FaPauseCircle,
  FaForward,
  FaBackward,
} from "react-icons/fa";

const Header = ({ showInfo, trackInfo }) => {
  // let padTo2Digits = (num) => {
  //   return num.toString().padStart(2, "0");
  // };

  // const convertMsToTime = (milliseconds) => {
  //   let seconds = Math.floor(milliseconds / 1000);
  //   let minutes = Math.floor(seconds / 60);

  //   seconds = seconds % 60;
  //   minutes = minutes % 60;

  //   return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  // };

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
        <div>{trackInfo.title}</div>
      </div>

      <div className="flex items-center">
        <FaBackward />
        <FaPlayCircle size={"70"} />
        <FaPauseCircle />
        <FaForward />
      </div>
    </div>
  );
};

export default Header;
