import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ showInfo, currentTrack, onEnd, onPrevious }) => {
  const tracks = showInfo.tracks;

  const checkTrackInList = (track) => {
    return track.title === currentTrack.title;
  };

  let tracksAfterCurrent = tracks.slice(
    tracks.findIndex(checkTrackInList),
    tracks.length
  );

  let tracksBeforeCurrent = tracks.slice(0, tracks.findIndex(checkTrackInList));

  return (
    <AudioPlayer
      className="sticky bottom-0 font-bold"
      autoPlay
      customVolumeControls={[]}
      autoPlayAfterSrcChange
      src={currentTrack.mp3}
      header={currentTrack.title}
      showSkipControls={true}
      showJumpControls={false}
      onEnded={() => onEnd(tracksAfterCurrent)}
      onClickNext={() => onEnd(tracksAfterCurrent)}
      onClickPrevious={() =>
        onPrevious(tracksAfterCurrent, tracksBeforeCurrent)
      }
    />
  );
};

export default Player;
