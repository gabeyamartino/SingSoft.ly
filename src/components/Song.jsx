import { Howl, Howler } from "howler";

let track = null;

const Song = ({ title, duration, mp3 }) => {
  let padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
  };

  const convertMsToTime = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  };

  let playTrack = () => {
    Howler.stop();

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
      <div>{convertMsToTime(duration)}</div>
    </div>
  );
};

export default Song;
