/** @module cPipe */

/**
 * conditional pipe
 * Прекращает pipe в тот момент, когда breakCondition(промежуточный результат) будет равно true
 * @param {function} breakCondition - condition for break pipe
 * @returns {function}
 */
export const cPipeWithFind = (breakCondition)=>(...fns)=>(state)=>{
  fns.find(fn => {
    state = fn(state);
    return breakCondition(state);
  });
  return state;
};

// В 3-4 раза быстрее cPipeWithFind
export const cPipeWithFor = (breakCondition)=>(...fns)=>(state)=>{
  for (let i=0; i<fns.length; i++) {
    state = fns[i](state);
    if (breakCondition(state)) break;
  }
  return state;
};

export const cCompose = (breakCondition)=>(...fns)=>(state)=>{
  for (let i=fns.length-1; 0 <= i; i--) {
    state = fns[i](state);
    if (breakCondition(state)) break;
  }
  return state;
};