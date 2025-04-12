import { SearchProvider } from "./context/SearchContext";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Flights from "./pages/Flights";

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:tripType" element={<Flights />} />
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
