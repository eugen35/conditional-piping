import {cPipeWithFor as cPipe, cCompose} from "./src/cPipeNCompose";
import {dPipeWithFor as dPipe} from "./src/dPipe";
import {wPipe} from "./src/wPipe";
import {pipeCb, composeCb, cPipeCb, cComposeCb, dPipeCb, wPipeCb, dComposeCb, wComposeCb} from "./src/pipesAndComposesCb";
import {makePipeReadyOneArg, makePipeReady, makePipeReadyCb, makePipeReadyOneArgCb} from "./src/helpers";

module.exports = {cPipe, dPipe, wPipe, cCompose,
  pipeCb, composeCb, cPipeCb, cComposeCb, dPipeCb, wPipeCb, dComposeCb, wComposeCb,
  makePipeReadyOneArg, makePipeReady, makePipeReadyOneArgCb, makePipeReadyCb};