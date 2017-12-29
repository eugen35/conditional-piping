import {expect} from 'chai';
import {cPipeWithFind, cPipeWithFor, cCompose} from "../src/cPipeNCompose";

describe("cPipe && cCompose", function () {
  const inc = n => ++n;
  const dec = n => --n;
  const double = n => n * 2;

  [cPipeWithFind, cPipeWithFor].forEach(fn =>
    it(fn.name,() => {
      const piped = fn(res=>4===res)(inc,double,dec);
      expect(piped(1)).to.equal(4); // breaked
      expect(piped(2)).to.equal(5); // not breaked
    })
  );


  it('cCompose',() => {
    const piped = cCompose(res=>4===res)(dec, double, inc);
    expect(piped(1)).to.equal(4); // breaked
    expect(piped(2)).to.equal(5); // not breaked
  });


});




