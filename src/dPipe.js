/**
 * conditional pipe do...while loop
 * Прекращает pipe в тот момент, когда breakCondition(промежуточный результат) будет равно true
 * Если после выполнения последней функции в pipe breakCondition(промежуточный результат) будет равно false, pipe начинает выполняться сначала
 * @param {function} breakCondition - condition for break pipe and loop
 * @returns {function}
 */
export const dPipe = (breakCondition)=>(...fns)=>(state)=>{
  do fns.find(fn => {
    state = fn(state);
    return breakCondition(state);
  });
  while (!breakCondition(state));
  return state;
};