import {expect} from 'chai';
import {cPipeWithFind} from "../src/cPipe";

describe("cPipeWithFind", function () {
  const inc = n => ++n;
  const dec = n => --n;
  const double = n => n * 2;
  it('cPipeWithFind',() => {
    const piped = cPipeWithFind(res=>4===res)(inc,double,dec);
    expect(piped(1)).to.equal(4); // breaked
    expect(piped(2)).to.equal(5); // not breaked
  });
});




