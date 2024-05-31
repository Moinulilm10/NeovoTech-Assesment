import HomeButton from "@/components/HomeButton";
import NextButton from "@/components/NextButton";
import cityCoordinates from "@/coordinates/CityCoordinates";
import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import { AppContext } from "./_app";

const MapComponent = dynamic(() => import("../components/Map"), { ssr: false });

const CityFinder = () => {
  const { state } = useContext(AppContext);
  const [distanceDiff, setDistanceDiff] = useState<number>(0);

  return (
    <>
      {state.started ? (
        <main className="main d-flex flex-column justify-content-center align-items-center bg-dark">
          <h1>{`${state.index + 1}. ${
            cityCoordinates.cities[state.index].name
          }`}</h1>
          <div className="distance-score">
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ width: "30%" }}
            >
              <h4 className="text-center">Distance</h4>
              <h5>
                {!state.playing
                  ? `${distanceDiff} Km`
                  : state.showResults
                  ? `${distanceDiff} Km`
                  : "?"}
              </h5>
            </div>
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ width: "40%" }}
            >
              <h4 className="text-center">Cities Found</h4>
              <h5 className="text-center">{state.citiesFound}</h5>
            </div>
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ width: "30%" }}
            >
              <h4 className="text-center">Total Km</h4>
              <h5 className="text-center">{`${state.kilometers}`}</h5>
            </div>
          </div>
          <MapComponent
            distanceDiff={distanceDiff}
            setDistanceDiff={setDistanceDiff}
          />
          <NextButton />
        </main>
      ) : (
        <main className="main d-flex flex-column justify-content-center align-items-center bg-dark">
          <HomeButton />
        </main>
      )}
    </>
  );
};

export default CityFinder;
