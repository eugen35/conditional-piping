import {cPipeWithFor as cPipe, cCompose} from "./src/cPipeNCompose";
import {dPipeWithFor as dPipe} from "./src/dPipe";
import {wPipe} from "./src/wPipe";
import {pipeCb, composeCb, cPipeCb, cComposeCb} from "./src/pipesAndComposesCb";
import {makePipeReadyOneArg, makePipeReady} from "./src/helpers";

module.exports = {cPipe, dPipe, wPipe, cCompose, pipeCb, composeCb, cPipeCb, cComposeCb, makePipeReadyOneArg, makePipeReady};