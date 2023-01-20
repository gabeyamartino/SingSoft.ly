import Header from "./Header.jsx";
import Years from "./Years.jsx";
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
    <QueryClientProvider client={queryClient}>
      <div className="">
        <Header />
        <BrowserRouter>
          <div className="p-2">
            <Link to="/years">bingy</Link>
            <h1>Years</h1>
          </div>
          <Routes>
            <Route path="/years" element={<Years />} />
            <Route pat="/" element={<Years />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
};

export default App;
