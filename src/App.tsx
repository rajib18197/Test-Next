import SearchFlights from "./features/flight/SearchBox";
import { SearchProvider } from "./context/SearchContext";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<SearchFlights />} />
          <Route element={""} />
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
