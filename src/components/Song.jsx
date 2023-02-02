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
  console.log(currentTrack);

  let playTrack = () => {
    setShowData(currentShow);

    setCurrentTrack({ title, duration, mp3, position: 0 });
    getTrackInfo({ title, duration, mp3, position: 0 });
  };
  return (
    <div>
      {currentTrack && mp3 === currentTrack.mp3 ? (
        <div
          className="-ml-2 -mr-2 flex justify-between border-b-2 bg-green-300 p-2"
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
          className="flex justify-between border-b-2 pt-2 pb-2"
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
