export const cPipeCb = (breakCondition)=>(...fns)=>(state)=>{
  for (let i=0; i<fns.length; i++) {
    state = fns[i](state);
    if (breakCondition(state)) break;
  }
  return state;
};

export const pipeCb = (...fns)=>{
  const piped = (state, cb) => {
  if (fns.length === 0) {
    cb(null, state);
  } else {
    fns[i](state, (err, res) => piped(res, ()));
  }
}};

