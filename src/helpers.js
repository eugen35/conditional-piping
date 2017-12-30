export const makePipeReadyOneArg = (f, inputHash, outputHash) => ({...state}) => {
  state[outputHash || inputHash] = f(state[inputHash]);
  return state;
};

export const makePipeReadyOneArgCb = (f, inputHash, outputHash) => ({...state},cb) => {
  f(state[inputHash],(err, res)=> {
    state[outputHash || inputHash] = res;
    cb(err,state);
  });
};

export const makePipeReady = (f, inputHashes, outputHash) => (state) => {
  const result=f(...inputHashes.map(inputHash => state[inputHash]));
  return outputHash ? {...state, [outputHash]: result}: {...state, ...result};
};

export const makePipeReadyCb = (f, inputHashes, outputHash) => (state, cb) => {
  f(...inputHashes.map(inputHash => state[inputHash]), (err, res)=>{
    cb(err, outputHash ? {...state, [outputHash]: res}: {...state, ...res});
  });
};