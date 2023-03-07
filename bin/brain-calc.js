#!/usr/bin/env node

import { greeting, greeting2, steps } from '../src/index.js';
import { calcLogic } from '../src/games.js';

greeting();
greeting2();
console.log('What is the result of the expression?');

steps(calcLogic);
