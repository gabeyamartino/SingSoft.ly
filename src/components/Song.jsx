import convertTime from "../methods/convertTime.js";

const Song = ({ title, duration, mp3, getTrackInfo, setCurrentTrack }) => {
  let playTrack = () => {
    setCurrentTrack({ title, duration, mp3, position: 0 });
    getTrackInfo({ title, duration, mp3, position: 0 });
  };

  return (
    <div
      className="flex justify-between border-b-2 pt-2 pb-2"
      onClick={() => playTrack()}
      onKeyPress={() => playTrack()}
      role="button"
      tabIndex={0}
    >
      <div>{title}</div>
      <div>{convertTime(duration)}</div>
    </div>
  );
};

export default Song;
