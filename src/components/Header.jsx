import { Link } from "react-router-dom";
import Logo from "../assets/logo-color.svg";

const Header = ({ showInfo }) => {
  return (
    <div className="flex h-44 w-full items-center justify-between bg-logo-green p-2">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      {Object.keys(showInfo).length > 0 && (
        <div className="text-white">
          <div className="text-xs">Now Playing: </div>
          <Link
            to={`/show/${showInfo.date}`}
            className="mt-2"
            state={{
              date: showInfo.date,
              tracks: showInfo.tracks,
              venue: {
                name: showInfo.venue_name,
                location: showInfo.venue_location,
              },
            }}
          >
            <div className="">
              {showInfo.date.slice(5, 7)}.{showInfo.date.slice(-2)}.
              {showInfo.date.slice(0, 4)}
            </div>
            <div>{showInfo.venue_name}</div>
            <div className="text-sm">{showInfo.venue_location}</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
