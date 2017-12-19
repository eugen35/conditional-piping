import {expect} from 'chai';
import {cPipeWithFind, cPipeWithFor} from "../src/cPipe";

describe("cPipeWithFind", function () {
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

});




