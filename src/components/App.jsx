import HeaderWrapper from "./HeaderWrapper.jsx";
import Years from "./Years.jsx";
import Year from "./Year.jsx";
import Show from "./Show.jsx";
import Player from "./Player.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-256965728-1";
ReactGA.initialize(TRACKING_ID);

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

  const headerRef = useRef(null);

  useEffect(() => {
    headerRef.current.scrollTop = 0;
  }, []);

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

  const setShowData = (data) => {
    setShowInfo(data);
  };

  const getTrackInfo = (track) => {
    setCurrentTrack(track);
  };

  document.body.style.backgroundColor = "#F9F6EE";

  return (
    <div className="min-w-screen min-h-screen flex-col bg-background font-display text-gray-900 lg:m-auto lg:max-w-screen-md">
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />

        <HeaderWrapper
          ref={headerRef}
          showInfo={showInfo}
          key={showInfo.date}
        />

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
    </div>
  );
};

export default App;
