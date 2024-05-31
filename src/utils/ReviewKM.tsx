import iState from "../interfaces/IState";

const reviewKM = (state: iState) => {
  let performance = "";

  if (state.kilometers <= 0) {
    performance = `You dropped ${state.kilometers} kilometers below zero`;
  } else if (state.kilometers <= 250) {
    performance = `You have ${state.kilometers} kilometers remaining`;
  } else if (state.kilometers <= 500) {
    performance = `You have ${state.kilometers} kilometers remaining`;
  } else if (state.kilometers <= 750) {
    performance = `You have ${state.kilometers} kilometers remaining`;
  } else if (state.kilometers <= 1000) {
    performance = `You have ${state.kilometers} kilometers remaining`;
  } else if (state.kilometers <= 1250) {
    performance = `You have ${state.kilometers} kilometers remaining`;
  } else
    performance = `You have ${state.kilometers} kilometers remaining.You find your cities!`;

  return performance;
};

export default reviewKM;
