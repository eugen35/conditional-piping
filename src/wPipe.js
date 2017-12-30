/**
 * @todo /1/ Протестировать wCompose и сделать его экспорт!
 * conditional pipe while loop
 * До начала выполнения pipe проверяет, если breakCondition(промежуточный результат) будет равно false, начинает выполнять pipe. По окончании pipe снова начинает цикл
 * Прекращает pipe вместе с циклом в тот момент, когда breakCondition(промежуточный результат) будет равно true.
 * @param {function} breakCondition - condition for break pipe and loop
 * @returns {function}
 */
export const wCompose = (breakCondition)=>(...fns)=>(state)=>{
  while (!breakCondition(state)) for (let i=fns.length-1; 0<=i; i--) {
    state = fns[i](state);
    if (breakCondition(state)) break;
  }
  return state;
};

export const wPipe = (breakCondition)=>(...fns)=>(state)=>{
  while (!breakCondition(state)) for (let i=0; i<fns.length; i++) {
    state = fns[i](state);
    if (breakCondition(state)) break;
  }
  return state;
};