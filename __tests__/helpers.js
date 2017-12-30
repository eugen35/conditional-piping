import {expect} from 'chai';
import {makePipeReadyOneArg, makePipeReady, makePipeReadyOneArgCb, makePipeReadyCb} from "../src/helpers";
import {pipeCb} from "../src/pipesAndComposesCb";

describe('helpers()',function(){ // function() вместо ()=> нужно писать чтобы timeout не ругался. Это неведомый глюк
  let inc = x=>++x;

  it('makePipeReadyOneArg()',()=>{
    let incReadyForComposing = makePipeReadyOneArg(inc, 'i', 'increasedI');
    expect(incReadyForComposing({a:1, i:1})).to.deep.equal({a:1, i:1, increasedI:2});
  });
  it('makePipeReadyOneArg() without outputHash',()=>{
    let incReadyForComposing = makePipeReadyOneArg(inc, 'i');
    expect(incReadyForComposing({a:1, i:1})).to.deep.equal({a:1, i:2});
  });
  it('makePipeReady()',()=>{
    let sum = (a,b)=>a+b;
    let incReadyForComposing = makePipeReady(sum, ['a', 'b'], 'sum');
    expect(incReadyForComposing({a:1, b:2, c:0})).to.deep.equal({a:1, b:2, c:0, sum:3});
  });
  it('makePipeReady() without outputHash',()=>{
    let sumInObj = (a,b)=>({sum: a+b});
    let incReadyForComposing = makePipeReady(sumInObj, ['a', 'b']);
    expect(incReadyForComposing({a:1, b:2, c:0})).to.deep.equal({a:1, b:2, c:0, sum:3});
  });

  describe('makePipeReadyOneArgCb()', function ()  {
    this.timeout(15000);
    let incCb =(x, cb) => setTimeout(function(){cb(null,++x)});
    let incReadyForComposing = makePipeReadyOneArgCb(incCb, 'x', 'fx');

    it('direct test', done=>{
      incReadyForComposing({a:1, x:3}, (err, res) => {
        expect(res).to.deep.equal({a:1, x:3, fx:4});
        done();
      });
    });

    it('test in pipeCb', done=>{
      let doubleCb =(state, cb) => setImmediate(()=>{
        let newState = {...state};
        newState.gfx = newState.fx*2;
        cb(null,newState);
      });
      const piped = pipeCb(incReadyForComposing, doubleCb);
      piped({a:1, x:3}, (err, res) => {
        expect(res).to.deep.equal({a:1, x:3, fx:4, gfx:8});
        done();
      });
    });
  });

  describe('makePipeReadyCb()', function ()  {
    this.timeout(15000);
    let sumCb =(x, y, cb) => setTimeout(function(){cb(null,x+y)});
    let incReadyForComposing = makePipeReadyCb(sumCb, ['x', 'y'], 'sum');

    it('direct test', done=>{
      incReadyForComposing({a:1, x:3, y:4}, (err, res) => {
        expect(res).to.deep.equal({a:1, x:3, y:4, sum:7});
        done();
      });
    });

    it('test in pipeCb', done=>{
      let doubleCb =(state, cb) => setImmediate(()=>{
        let newState = {...state};
        newState.gSum = newState.sum*2;
        cb(null,newState);
      });
      const piped = pipeCb(incReadyForComposing, doubleCb);
      piped({a:1, x:3, y:4}, (err, res) => {
        expect(res).to.deep.equal({a:1, x:3, y:4, sum:7, gSum:14});
        done();
      });
    });
  });
});