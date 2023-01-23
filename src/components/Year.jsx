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
  console.log(data);

  return (
    <div>
      {data.map((show, i) => {
        return (
          <div key={i}>
            <span>{show.date}</span>
            <span>{show.venue_name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Year;
