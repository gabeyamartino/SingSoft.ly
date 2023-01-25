import Header from "./Header.jsx";
import Years from "./Years.jsx";
import Year from "./Year.jsx";
import Show from "./Show.jsx";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const [showInfo, setShowInfo] = useState({});

  const setShowData = (data) => {
    setShowInfo(data);
  };

  console.log(showInfo);

  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header showInfo={showInfo} />
          <Routes>
            <Route path="/" element={<Years />} />
            <Route path="/years" element={<Years />} />
            <Route path="year/:id" element={<Year />} />
            <Route
              path="show/:date"
              element={<Show setShowData={setShowData} />}
            />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
