import React, { useEffect, useState } from "react";
import {
  FaPlayCircle,
  FaPauseCircle,
  FaForward,
  FaBackward,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between bg-gray-300 p-2">
      <div>
        <div className="text-2xl">SingSoft.ly</div>
        <div className="text-sm">07.16.2022</div>
        <div className="text-sm">Bangor, Maine</div>
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
