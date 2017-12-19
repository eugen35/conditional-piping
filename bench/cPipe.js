import Benchmark from 'benchmark';
import {cPipeWithFind, cPipeWithFor} from '../src/cPipe';

const suite = new Benchmark.Suite;

const inc = n => ++n;
const dec = n => --n;
const double = n => n * 2;

const findPiped = cPipeWithFind(res=>100===res)(inc,double,dec);
const forPiped = cPipeWithFor(res=>100===res)(inc,double,dec);

// add tests
suite.add('cPipe with find', function() {
  findPiped(1);
})
  .add('cPipe with for', function() {
    forPiped(1);
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