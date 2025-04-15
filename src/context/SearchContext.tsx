import { createContext, useContext, useState } from "react";

const SearchContext = createContext({});
type Airport = {
  airportName: string;
  acronym: string;
  city: string;
  country: string;
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
  toDate?: Date;
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
  from: {
    airportName: "Hazrat Shahjalal Intl Airport",
    acronym: "DAC",
    city: "Dhaka",
    country: "Bangladesh",
  },
  to: {
    airportName: "Cox's Bazar Airport",
    acronym: "CXB",
    city: "Cox's Bazar",
    country: "Bangladesh",
  },
  fromDate: new Date("23 Apr 2025"),
  toDate: new Date("30 Apr 2025"),
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
