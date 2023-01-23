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

  return (
    <div className="flex justify-between border-b-2 pt-2 pb-2">
      <div>{title}</div>
      <div>{convertMsToTime(duration)}</div>
    </div>
  );
};

export default Song;
