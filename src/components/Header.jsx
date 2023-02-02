import { Link } from "react-router-dom";

const Header = ({ showInfo }) => {
  return (
    <div className="sticky top-0 z-50 flex justify-between bg-gray-300 p-2">
      <div>
        <Link to="/" className="text-2xl">
          SingSoft.ly
        </Link>
      </div>

      {Object.keys(showInfo).length > 0 && (
        <div>
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
