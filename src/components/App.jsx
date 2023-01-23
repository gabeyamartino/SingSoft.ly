import Header from "./Header.jsx";
import Years from "./Years.jsx";
import Year from "./Year.jsx";
import Show from "./Show.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes>
            <Route path="/" element={<Years />} />
            <Route path="/years" element={<Years />} />
            <Route path="year/:id" element={<Year />} />
            <Route path="show/:date" element={<Show />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
