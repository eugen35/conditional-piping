//import {cPipe} from "../index"; // @todo /6/ НЕВЕДОМО ПОЧЕМУ! Но если отсюда импортировать, - возвращает ошибку
import {cPipeWithFor as cPipe} from "./cPipeNCompose";
/**
 * conditional pipe do...while loop
 * Прекращает pipe в тот момент, когда breakCondition(промежуточный результат) будет равно true
 * Если после выполнения последней функции в pipe breakCondition(промежуточный результат) будет равно false, pipe начинает выполняться сначала
 * @param {function} breakCondition - condition for break pipe and loop
 * @returns {function}
 */
export const dPipeWithCPipeWithFor = (breakCondition)=>(...fns)=>(state)=>{
  do {state = cPipe(breakCondition)(...fns)(state)} while (!breakCondition(state));
  return state;
};

// Данная функция на node v9.2.0 работает в 6-7 раз быстрее, чем dPipeWithCPipeWithFor
export const dPipeWithFor = (breakCondition)=>(...fns)=>(state)=>{
  do for (let i=0; i<fns.length; i++) {
    state = fns[i](state);
    if (breakCondition(state)) break;
  } while (!breakCondition(state));
  return state;
};