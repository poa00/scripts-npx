#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as execa from "execa";
import * as fs from "fs-extra";
import * as path from "path";
import * as os from "os";
import { glob } from "glob";
import { fileURLToPath } from "url";
import * as ask from "./ask.js";
import * as utils from "./utils.js";

const argv = await yargs(hideBin(process.argv)).help(false).argv;
const [script, ...args] = argv._;

global.args = { ...argv, _: args };
global.$ = execa.$;
global.fs = fs.default as any;
global.path = path;
global.os = os;
global.ask = ask;
global.utils = utils;
global.glob = glob;

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
global.scriptsRoot = path.join(dirname, "../scripts");

await utils.runScript(`${script}`);
