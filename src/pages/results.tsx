import HomeButton from "@/components/HomeButton";
import cityCoordinates from "@/coordinates/CityCoordinates";
import reviewKM from "@/utils/ReviewKM";
import reviewScore from "@/utils/ReviewScore";
import { useContext } from "react";
import { AppContext } from "./_app";

const Results = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      {state.showResults ? (
        <main className="main d-flex flex-column justify-content-center align-items-center bg-dark">
          <section className="results">
            {state.index < cityCoordinates.cities.length - 1 ? (
              <>
                <h1 className="mt-5 mb-2 mx-auto font-weight-bold display-2">
                  Game
                </h1>
                <h3 className="mb-5 mx-auto">You ran out of kilometers!</h3>
              </>
            ) : (
              <>
                <h1 className="my-1 mx-auto font-weight-bold display-4">
                  well done
                </h1>
                <h1 className="my-1 mx-auto font-weight-bold display-4">
                  You have completed the Game
                </h1>
              </>
            )}
            <h1 className="my-3 mx-auto font-weight-bold display-4">{`Final Score: ${state.citiesFound}`}</h1>
            <br />
            <h2 className="mt-5  mb-1 mx-auto font-weight-bold">Performance</h2>
            <h3 className="mb-3 mx-auto font-italic">{reviewScore(state)}</h3>
            <h3 className="mb-5 mx-auto font-italic">{reviewKM(state)}</h3>
          </section>
          <HomeButton />
        </main>
      ) : null}
    </>
  );
};

export default Results;
