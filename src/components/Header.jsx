import React, { useEffect, useState } from "react";
import {
  FaPlayCircle,
  FaPauseCircle,
  FaForward,
  FaBackward,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-around">
      <div>
        <div>SingSoft.ly</div>
        <div>07.16.2022</div>
        <div>Bangor, Maine</div>
      </div>
      <div className="flex items-center">
        <FaBackward />
        <FaPlayCircle />
        <FaPauseCircle />
        <FaForward />
      </div>
    </div>
  );
};

export default Header;
