import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Song from "./Song.jsx";

const Show = ({ setShowData, getTrackInfo }) => {
  const location = useLocation();
  let set = "";

  console.log("LOCATION IN SHOW, ", location.state);

  const checkSet = (setNum, num) => {
    if (setNum !== num) {
      set = setNum;
      return setNum === "E" ? (
        <div className="border-b-4 text-2xl">Encore</div>
      ) : (
        <div className="border-b-4 text-2xl">Set {setNum}</div>
      );
    }
  };
  useEffect(() => {
    setShowData(location.state);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!location.state) {
    return null;
  }

  return (
    <div className="p-2">
      {location.state.tracks.map((track, i) => {
        return (
          <div key={i}>
            {checkSet(track.set, set)}
            <Song
              title={track.title}
              duration={track.duration}
              mp3={track.mp3}
              getTrackInfo={getTrackInfo}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Show;
