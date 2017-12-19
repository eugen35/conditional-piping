/**
 * conditional pipe while loop
 * До начала выполнения pipe проверяет, если breakCondition(промежуточный результат) будет равно false, начинает выполнять pipe. По окончании pipe снова начинает цикл
 * Прекращает pipe вместе с циклом в тот момент, когда breakCondition(промежуточный результат) будет равно true.
 * @param {function} breakCondition - condition for break pipe and loop
 * @returns {function}
 */
export const wPipe = (breakCondition)=>(...fns)=>(state)=>{
  while (!breakCondition(state)) fns.find(fn => {
    state = fn(state);
    return breakCondition(state);
  });
  return state;
};
