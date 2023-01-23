import { Link } from "react-router-dom";
import {
  FaPlayCircle,
  FaPauseCircle,
  FaForward,
  FaBackward,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-between bg-gray-300 p-2">
      <div>
        <Link to="/" className="text-2xl">
          SingSoft.ly
        </Link>
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
