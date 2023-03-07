#!/usr/bin/env node

import { greeting, steps } from '../src/index.js';
import { isNaturalLogic } from '../src/games.js';

greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

steps(isNaturalLogic);
