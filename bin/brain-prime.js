#!/usr/bin/env node

import { greeting, greeting2, steps } from '../src/index.js';
import { isNaturalLogic } from '../src/games.js';

greeting();
greeting2();
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

steps(isNaturalLogic);
