import {cPipeWithFor as cPipe, cCompose} from "./src/cPipeNCompose";
import {dPipeWithFor as dPipe} from "./src/dPipe";
import {wPipe} from "./src/wPipe";
import {makePipeReadyOneArg, makePipeReady} from "./src/helpers";

module.exports = {cPipe, dPipe, wPipe, cCompose, makePipeReadyOneArg, makePipeReady};