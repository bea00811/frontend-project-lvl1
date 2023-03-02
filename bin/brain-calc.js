#!/usr/bin/env node

import { greeting, steps } from '../src/index.js';
import { calcLogic } from '../src/games.js';

greeting();
console.log('What is the result of the expression?');

steps(calcLogic);
