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

  return <div>{id}</div>;
};

export default Year;
