export const pipeCb = (...fns)=>(state, cb)=>{
  let i=0;
  const innerCb = (err, state)=> fns.length === ++i ? cb(err, state) : fns[i](state, innerCb);
  fns[i](state, innerCb);
};

export const cPipeCb = (breakCondition)=>(...fns)=>(state, cb)=>{
  let i=0;
  const innerCb = (err, state)=> (breakCondition(state) || fns.length === ++i) ? cb(err, state) : fns[i](state, innerCb);
  fns[i](state, innerCb);
};

export const composeCb = (...fns)=>(state, cb)=>{
  let i=fns.length-1;
  const innerCb = (err, state)=> --i < 0 ? cb(err, state) : fns[i](state, innerCb);
  fns[i](state, innerCb);
};

export const cComposeCb = (breakCondition)=>(...fns)=>(state, cb)=>{
  let i=fns.length-1;
  const innerCb = (err, state)=> (breakCondition(state) || --i < 0) ? cb(err, state) : fns[i](state, innerCb);
  fns[i](state, innerCb);
};