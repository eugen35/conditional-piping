import Benchmark from 'benchmark';
import {dPipeWithFor, dPipeWithCPipeWithFor} from '../src/dPipe';

const suite = new Benchmark.Suite;

const inc = n => ++n;
const double = n => n * 2;

const forDPiped = dPipeWithFor(res=>10===res)(inc, double);
const cPipeDPiped = dPipeWithCPipeWithFor(res=>10===res)(inc, double);

// add tests
suite.add('dPipe with For', function() {
  forDPiped(1);
})
  .add('dPipe with cPipeWithFor', function() {
    cPipeDPiped(1);
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });