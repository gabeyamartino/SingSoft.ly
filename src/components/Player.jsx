import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ trackInfo, showInfo, currentTrack, onEnd }) => {
  const tracks = showInfo.tracks;

  const checkTrackInList = (track) => {
    return track.title === trackInfo.title;
  };

  const tracksAfterCurrent = tracks.slice(
    tracks.findIndex(checkTrackInList),
    tracks.length
  );

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
    />
  );
};

export default Player;
