import {expect} from 'chai';
import {pipeCb} from "../src/cPipeCb";

describe("pipeCb", function () {
  const incCb = (n, cb) => cb(null,++n);
  const doubleCb = (n, cb) => cb(null,n*2);

  it('pipeCb',done => {
    const piped = pipeCb(incCb, doubleCb);
    piped(3,(err,res)=>{
      expect(res).to.equal(8);
      done();
    });
  });

});




