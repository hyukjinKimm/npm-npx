#!/usr/bin/env node

var greeting = require("./main.js");
console.log("Greeting: " + greeting[process.argv[2]]);
