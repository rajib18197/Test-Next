import { createContext, useContext, useState } from "react";

const SearchContext = createContext({});

const INITIAL_STATE = {
  tripType: "ROUND_WAY",
  from: {},
  to: {},
  fromDate: "",
  toDate: "",
  travelClass: "",
  pax: {
    adult: 1,
    child: 0,
    infant: 0,
  },
};

function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchState, setSearchState] = useState(INITIAL_STATE);

  function handleSearch(obj: typeof INITIAL_STATE) {
    console.log(obj);
    // setSearchState({ ...obj });
  }

  return (
    <SearchContext.Provider value={{ searchState, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error("SearchContext was used outside of SearchProvider");
  return context;
}

export { SearchProvider, useSearch };
