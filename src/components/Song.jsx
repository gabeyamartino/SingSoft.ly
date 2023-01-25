import { Howl, Howler } from "howler";
import convertTime from "../methods/convertTime.js";

let track = null;

const Song = ({ title, duration, mp3, getTrackInfo }) => {
  let playTrack = () => {
    Howler.stop();
    getTrackInfo({ title, duration });

    console.log(title, mp3);
    track = new Howl({
      src: mp3,
      html5: true,
      onplayerror: () => {
        console.log("ON PLAY ERROR");
      },
      onloaderror: () => {
        console.log("ON LOAD ERROR");
      },
    });

    track.play();
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
