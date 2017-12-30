import {expect} from 'chai';
import {pipeCb, composeCb, cPipeCb, cComposeCb, dPipeCb, wPipeCb, dComposeCb, wComposeCb} from "../src/pipesAndComposesCb";

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
  it('dPipeCb. Case 1',done => {
    const piped = dPipeCb(res=>10 < res)(incCb, doubleCb);
    piped(1,(err,res)=>{
      expect(res).to.equal(11); // breaked
      done();
    });
  });
  it('dPipeCb. Case 2',done => {
    const piped = dPipeCb(res=>1 <= res)(incCb, doubleCb);
    piped(1,(err,res)=>{
      expect(res).to.equal(2); // breaked
      done();
    });
  });
  it('dComposeCb. Case 2',done => {
    const composed = dComposeCb(res=>1 <= res)(doubleCb, incCb);
    composed(1,(err,res)=>{
      expect(res).to.equal(2); // breaked
      done();
    });
  });
  it('wPipeCb. Case 1',done => {
    const piped = wPipeCb(res=>10 < res)(incCb, doubleCb);
    piped(1,(err,res)=>{
      expect(res).to.equal(11); // breaked
      done();
    });
  });
  it('wPipeCb. Case 2',done => {
    const piped = wPipeCb(res=>1 <= res)(incCb, doubleCb);
    piped(1,(err,res)=>{
      expect(res).to.equal(1); // breaked
      done();
    });
  });
  it('wComposeCb. Case 2',done => {
    const composed = wComposeCb(res=>1 <= res)(doubleCb, incCb);
    composed(1,(err,res)=>{
      expect(res).to.equal(1); // breaked
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




