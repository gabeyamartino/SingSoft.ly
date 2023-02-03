import convertTime from "../methods/convertTime.js";

const Song = ({
  title,
  duration,
  mp3,
  getTrackInfo,
  setCurrentTrack,
  setShowData,
  currentShow,
  currentTrack,
}) => {
  let playTrack = () => {
    setShowData(currentShow);

    setCurrentTrack({ title, duration, mp3, position: 0 });
    getTrackInfo({ title, duration, mp3, position: 0 });
  };
  return (
    <div>
      {currentTrack && mp3 === currentTrack.mp3 ? (
        <div
          className="-ml-2 -mr-2 flex justify-between  border-gray-600 bg-green-700 p-2"
          onClick={() => {
            playTrack();
          }}
          onKeyPress={() => playTrack()}
          role="button"
          tabIndex={0}
        >
          <div>{title}</div>
          <div>{convertTime(duration)}</div>
        </div>
      ) : (
        <div
          className="-mr-2 -ml-2 flex justify-between  border-gray-600 p-2"
          onClick={() => {
            playTrack();
          }}
          onKeyPress={() => playTrack()}
          role="button"
          tabIndex={0}
        >
          <div>{title}</div>
          <div>{convertTime(duration)}</div>
        </div>
      )}
    </div>
  );
};

export default Song;
