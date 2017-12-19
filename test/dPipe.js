import {expect} from 'chai';
import {dPipe} from "../src/dPipe";

describe("dPipe", function () {
  const inc = n => ++n;
  const double = n => n * 2;
  it('dPipe',() => {
    const piped = dPipe(res=>10 < res)(inc,double);
    expect(piped(1)).to.equal(11); // breaked
    const piped1 = dPipe(res=>1 <= res)(inc,double);
    expect(piped1(1)).to.equal(2); // breaked
  });
});




