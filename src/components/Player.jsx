import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ trackInfo, showInfo, currentTrack, onEnd }) => {
  const tracks = showInfo.tracks;

  console.log(showInfo);

  const checkTrackInList = (track) => {
    console.log("working");
    return track.title === trackInfo.title;
  };

  const tracksAfterCurrent = tracks.slice(
    tracks.findIndex(checkTrackInList),
    tracks.length
  );

  console.log("CURRENT TRACK WITHIN PLATER", currentTrack);

  return (
    <AudioPlayer
      className="sticky bottom-0"
      autoPlay
      autoPlayAfterSrcChange
      src={currentTrack.mp3}
      header={currentTrack.title}
      showSkipControls={true}
      showJumpControls={false}
      onEnded={() => onEnd(tracksAfterCurrent)}
      // other props here
    />
  );
};

export default Player;
