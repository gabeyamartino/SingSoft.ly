import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchYears from "../methods/fetchYears";
import LoadingAnimation from "./LoadingAnimation.jsx";

const Years = () => {
  const { id } = useParams();
  const results = useQuery(["years", id], fetchYears);

  if (results.isLoading) {
    return (
      <div className="min-w-screen flex min-h-screen items-center justify-center">
        <LoadingAnimation />
      </div>
    );
  }

  let data = results.data.data;
  return (
    <div className="pt-176">
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
              <div className="mt-4 border-b-2 border-gray-600 p-2 text-3xl">
                {key} Era
              </div>
              {reversed.map((year, i) => {
                return (
                  <Link
                    to={`/year/${year}`}
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
