interface iCities {
  name: string;
  position: {
    lat: number;
    lng: number;
  };
}

export interface iCoordinates {
  cities: iCities[];
}

export default iCoordinates;
