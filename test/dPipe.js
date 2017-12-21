import {expect} from 'chai';
import {dPipeWithCPipeWithFor, dPipeWithFor, dPipeWithCPipeWithForConst} from "../src/dPipe";

describe("dPipe", function () {
  const inc = n => ++n;
  const double = n => n * 2;

  [dPipeWithCPipeWithFor, dPipeWithFor, dPipeWithCPipeWithForConst].forEach(fn =>
    it(fn.name,() => {
      const piped = fn(res=>10 < res)(inc,double);
      expect(piped(1)).to.equal(11); // breaked
      const piped1 = fn(res=>1 <= res)(inc,double);
      expect(piped1(1)).to.equal(2); // breaked
    })
  );

});




