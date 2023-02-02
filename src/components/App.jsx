import Header from "./Header.jsx";
import Years from "./Years.jsx";
import Year from "./Year.jsx";
import Show from "./Show.jsx";
import Player from "./Player.jsx";
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
  const [currentTrack, setCurrentTrack] = useState({});
  console.log(currentTrack);
  const onEnd = (array) => {
    array.shift();
    if (!array.length) return;
    setCurrentTrack(array[0]);
  };

  const onPrevious = (curr, prev) => {
    if (!prev.length) return;
    curr.unshift(prev[prev.length - 1]);
    setCurrentTrack(curr[0]);
  };
  console.log("CURRENT TRACK", currentTrack);

  const setShowData = (data) => {
    setShowInfo(data);
    //console.log(showInfo);
  };

  const getTrackInfo = (track) => {
    setCurrentTrack(track);
    //console.log(trackInfo);
  };

  return (
    <div className="lg:m-auto lg:max-w-screen-sm lg:flex-col lg:items-center">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header showInfo={showInfo} currentTrack={currentTrack} />
          <Routes>
            <Route path="/" element={<Years />} />
            <Route path="/years" element={<Years />} />
            <Route path="year/:id" element={<Year />} />
            <Route
              path="show/:date"
              element={
                <Show
                  setShowData={setShowData}
                  showInfo={showInfo}
                  getTrackInfo={getTrackInfo}
                  setCurrentTrack={setCurrentTrack}
                  currentTrack={currentTrack}
                />
              }
            />
          </Routes>
          {currentTrack.mp3 && (
            <Player
              showInfo={showInfo}
              currentTrack={currentTrack}
              onEnd={onEnd}
              onPrevious={onPrevious}
            />
          )}
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
