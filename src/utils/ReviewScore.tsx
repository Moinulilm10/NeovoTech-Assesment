import iState from "@/interfaces/iState";

const reviewScore = (state: iState) => {
  let performance = "";

  if (state.citiesFound === 0) {
    performance = `You located ${state.citiesFound} city.`;
  } else if (state.citiesFound === 1) {
    performance = `You only found ${state.citiesFound} city.`;
  } else if (state.citiesFound === 2) {
    performance = `You only found ${state.citiesFound} cities.`;
  } else if (state.citiesFound <= 4) {
    performance = `You only found ${state.citiesFound} cities.`;
  } else if (state.citiesFound <= 6) {
    performance = `You located ${state.citiesFound} cities.`;
  } else if (state.citiesFound <= 8) {
    performance = `You located ${state.citiesFound} cities.`;
  } else performance = `You located ${state.citiesFound} cities.`;

  return performance;
};

export default reviewScore;
