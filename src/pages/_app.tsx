import iState from "@/interfaces/iState";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";

interface AppContextProps {
  state: iState;
  setState: React.Dispatch<React.SetStateAction<iState>>;
}

const initialState: iState = {
  started: false,
  playing: false,
  index: 0,
  citiesFound: 0,
  kilometers: 1500,
  displayGuide: false,
  location: { lat: null, lng: null },
  guessLocation: { lat: null, lng: null },
  showResults: false,
};

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  setState: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [state, setState] = useState<iState>(initialState);
  return (
    <AppContext.Provider value={{ state, setState }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
