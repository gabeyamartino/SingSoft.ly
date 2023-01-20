import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchYears from "../methods/fetchYears";

const Years = () => {
  const { id } = useParams();

  const results = useQuery(["years", id], fetchYears);

  if (results.isLoading) {
    return (
      <div>
        <h2>spiral</h2>
      </div>
    );
  }

  const data = results.data.data;

  console.log(data);
  return (
    <div>
      {Object.keys(data)
        .reverse()
        .map((key) => {
          let reversed = data[key].sort((a, b) => {
            if (isNaN(Number(a)) || isNaN(Number(b))) {
              b = 0;
            }
            console.log(a, b);
            return Number(b) - Number(a);
          });
          return (
            <>
              <h3>{key}</h3>
              <div className="border-b-2"></div>
              {reversed.map((year, index) => {
                return <div key={index}>{year}</div>;
              })}
            </>
          );
        })}
    </div>
  );
};

export default Years;
