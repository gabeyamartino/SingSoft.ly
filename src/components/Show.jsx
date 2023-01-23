import { useLocation } from "react-router-dom";

const Show = () => {
  const location = useLocation();

  console.log(location);
  return (
    <div>
      {location.state.tracks.map((track, i) => {
        return <div key={i}>{track.title}</div>;
      })}
      <div>Song</div>
    </div>
  );
};

export default Show;
