#!/usr/bin/env node

import { greeting, greeting2, steps } from '../src/index.js';
import { biggestDivisorLogic } from '../src/games.js';

greeting();
greeting2();
console.log('Find the greatest common divisor of given numbers');

steps(biggestDivisorLogic);
