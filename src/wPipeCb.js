export const wPipeCb = (breakCondition)=>(...fns)=>(state)=>{
  while (!breakCondition(state)) for (let i=0; i<fns.length; i++) {
    state = fns[i](state);
    if (breakCondition(state)) break;
  }
  return state;
};
