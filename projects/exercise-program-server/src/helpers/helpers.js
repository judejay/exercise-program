"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printNewLine = void 0;
const os_1 = require("os");
function printNewLine() {
    console.log(os_1.EOL); // this imports the correct End-Of-Line for either Windows or Unix
}
exports.printNewLine = printNewLine;
