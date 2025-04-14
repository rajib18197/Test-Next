import { createContext, useContext, useState } from "react";

const SearchContext = createContext({});
type Airport = {
  fullName: string;
  acronym: string;
  location: string;
};

type Pax = {
  adult: number;
  child: number;
  infant: number;
};

type SearchContext = {
  from: Airport;
  to: Airport;
  fromDate: Date;
  toDate: Date;
  pax: Pax;
  travelClass:
    | "economy"
    | "premium-economy"
    | "business"
    | "premium-business"
    | "first-class"
    | "premium-first-class";
  tripType: "one-way" | "round-way";
};

const INITIAL_STATE: SearchContext = {
  from: { fullName: "", acronym: "", location: "" },
  to: { fullName: "", acronym: "", location: "" },
  fromDate: new Date(),
  toDate: new Date(),
  pax: { adult: 1, child: 0, infant: 0 },
  travelClass: "economy",
  tripType: "round-way",
};

function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchState, setSearchState] = useState(INITIAL_STATE);

  function handleSearch(obj: typeof INITIAL_STATE) {
    console.log(obj);
    setSearchState({ ...obj });
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
