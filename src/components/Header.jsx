import { Link } from "react-router-dom";

const Header = ({ showInfo }) => {
  console.log(showInfo);
  return (
    <div className="sticky top-0 z-50 flex justify-between bg-gray-300 p-2">
      <div>
        <Link to="/" className="text-2xl">
          SingSoft.ly
        </Link>
      </div>

      {Object.keys(showInfo).length > 0 && (
        <Link
          to={`/show/${showInfo.date}`}
          className="mt-2"
          state={{
            name: showInfo.venue_name,
            location: showInfo.venue_location,
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
          <div className="">{showInfo.venue_name}</div>
          <div className="text-sm">{showInfo.venue_location}</div>
        </Link>
      )}
    </div>
  );
};

export default Header;
