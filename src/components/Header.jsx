import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo-color.svg";

const Header = ({ showInfo }) => {
  return (
    <div className="lg:min-w-screen-lg sticky top-0 z-50 flex items-center justify-between bg-logo-green p-2">
      <div className="">
        <Link to="/">
          <Logo />
        </Link>
      </div>

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
