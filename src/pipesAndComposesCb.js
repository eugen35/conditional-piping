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

export const dPipeCb = (breakCondition)=>(...fns)=>(state, cb)=>{
  let i=0;
  const innerCb = (err, state)=> {
    if (fns.length === ++i) i = 0;
    breakCondition(state) ? cb(err, state) : fns[i](state, innerCb);
  };
  fns[i](state, innerCb);
};

export const wPipeCb = (breakCondition)=>(...fns)=>(state, cb)=>{
  let i=0;
  const innerCb = (err, state)=> {
    if (fns.length === i) i = 0;
    breakCondition(state) ? cb(err, state) : fns[i++](state, innerCb);
  };
  innerCb(null, state);
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

export const dComposeCb = (breakCondition)=>(...fns)=>(state, cb)=>{
  const lastI = fns.length-1;
  let i=lastI;
  const innerCb = (err, state)=> {
    if (--i < 0) i = lastI;
    breakCondition(state) ? cb(err, state) : fns[i](state, innerCb);
  };
  fns[i](state, innerCb);
};

export const wComposeCb = (breakCondition)=>(...fns)=>(state, cb)=>{
  const lastI = fns.length-1;
  let i=lastI;
  const innerCb = (err, state)=> {
    if (i < 0) i = lastI;
    breakCondition(state) ? cb(err, state) : fns[i--](state, innerCb);
  };
  innerCb(null, state);
};