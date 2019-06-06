export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("persist:root");
    if (serializedState === null) {
      return undefined;
    }

    const state = JSON.parse(serializedState);
    let { seatsReducer } = state;
    seatsReducer = JSON.parse(seatsReducer);
    const { seats } = seatsReducer;
    return seats;
  } catch (err) {
    return undefined;
  }
};
