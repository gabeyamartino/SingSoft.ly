import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchShowsFromYear from "../methods/fetchShowsFromYear";

const Year = () => {
  const { id } = useParams();
  console.log("ID INSIDE YEAR", id);
  const results = useQuery(["year", id], () => fetchShowsFromYear(id));

  if (results.isLoading) {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }

  let data = results.data.data;

  let ordered = [...data].reverse();

  return (
    <div className="p-1">
      {ordered.map((show, i) => {
        return (
          <div className="flex justify-between p-1" key={i}>
            <span>{show.date}</span>
            {show.venue_name.length >= 30 ? (
              <span>{show.venue_name.slice(0, 30)}...</span>
            ) : (
              <span>{show.venue_name}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Year;
