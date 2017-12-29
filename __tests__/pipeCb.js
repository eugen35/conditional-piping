import {expect} from 'chai';
import {pipeCb, composeCb, cPipeCb, cComposeCb} from "../src/cPipeCb";

describe("pipeCb", function () {
  const incCb = (n, cb) => cb(null,++n);
  const doubleCb = (n, cb) => cb(null,n*2);
  const decCb = (n, cb) => cb(null,--n);

  it('pipeCb',done => {
    const piped = pipeCb(incCb, doubleCb, decCb);
    piped(1,(err,res)=>{
      expect(res).to.equal(3);
      done();
    });
  });
  it('cPipeCb',done => {
    const piped = cPipeCb(res=>4===res)(incCb, doubleCb, decCb);
    piped(1,(err,res)=>{
      expect(res).to.equal(4);
      done();
    });
  });
  it('composeCb',done => {
    const composed = composeCb(decCb, doubleCb, incCb);
    composed(1,(err,res)=>{
      expect(res).to.equal(3);
      done();
    });
  });
  it('cComposeCb',done => {
    const composed = cComposeCb(res=>4===res)(decCb, doubleCb, incCb);
    composed(1,(err,res)=>{
      expect(res).to.equal(4);
      done();
    });
  });

});




