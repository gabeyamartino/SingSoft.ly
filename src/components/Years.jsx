import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchYears from "../methods/fetchYears";

const Years = () => {
  const { id } = useParams();

  const results = useQuery(["years", id], fetchYears);

  if (results.isLoading) {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }

  const data = results.data.data;

  if (typeof data !== "object") {
    return null;
  }
  return (
    <div>
      {Object.keys(data)
        .reverse()
        .map((key, index) => {
          let reversed = data[key].sort((a, b) => {
            if (isNaN(Number(a)) || isNaN(Number(b))) {
              b = 0;
            }
            return Number(b) - Number(a);
          });
          return (
            <div key={index}>
              <div className="mt-4 border-b-2 p-2 text-3xl">{key} Era</div>
              {reversed.map((year, i) => {
                return (
                  <Link
                    to={`/year/${year}`}
                    // onClick={() => {
                    //   fetchShowsFromYear(year);
                    // }}
                    year={year}
                    key={i}
                    className="ml-2 block p-2 pl-0"
                  >
                    {year}
                  </Link>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default Years;
