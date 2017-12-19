import {expect} from 'chai';
import {wPipe} from "../src/wPipe";

describe("wPipe", function () {
  const inc = n => ++n;
  const double = n => n * 2;
  it('wPipe',() => {
    const piped = wPipe(res=>10 < res)(inc,double);
    expect(piped(1)).to.equal(11); // breaked
    const piped1 = wPipe(res=>1 <= res)(inc,double);
    expect(piped1(1)).to.equal(1); // breaked
  });
});




