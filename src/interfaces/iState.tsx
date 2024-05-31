interface iMarkers {
  lat: number | null;
  lng: number | null;
}

export interface iState {
  started: boolean;
  playing: boolean;
  index: number;
  citiesFound: number;
  kilometers: number;
  displayGuide: boolean;
  location: iMarkers;
  guessLocation: iMarkers;
  showResults: boolean;
}

export default iState;
