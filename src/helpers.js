export const makePipeReadyOneArg = (f, inputHash, outputHash) => ({...state}) => {
  state[outputHash || inputHash] = f(state[inputHash]);
  return state;
};

export const makePipeReady = (f, inputHashes, outputHash) => (state) => {
  const result=f(...inputHashes.map(inputHash => state[inputHash]));
  return outputHash ? {...state, [outputHash]: result}: {...state, ...result};
};