import {expect} from 'chai';
import {makePipeReadyOneArg, makePipeReady} from "../src/helpers";

it('makePipeReadyOneArg()',()=>{
  let inc = x=>++x;
  let incReadyForComposing = makePipeReadyOneArg(inc, 'i', 'increasedI');
  expect(incReadyForComposing({a:1, i:1})).to.deep.equal({a:1, i:1, increasedI:2});
});
it('makePipeReadyOneArg() without outputHash',()=>{
  let inc = x=>++x;
  let incReadyForComposing = makePipeReadyOneArg(inc, 'i');
  expect(incReadyForComposing({a:1, i:1})).to.deep.equal({a:1, i:2});
});
it('makePipeReady()',()=>{
  let inc = (a,b)=>a+b;
  let incReadyForComposing = makePipeReady(inc, ['a', 'b'], 'sum');
  expect(incReadyForComposing({a:1, b:2, c:0})).to.deep.equal({a:1, b:2, c:0, sum:3});
});
it('makePipeReady() without outputHash',()=>{
  let inc = (a,b)=>({sum: a+b});
  let incReadyForComposing = makePipeReady(inc, ['a', 'b']);
  expect(incReadyForComposing({a:1, b:2, c:0})).to.deep.equal({a:1, b:2, c:0, sum:3});
});