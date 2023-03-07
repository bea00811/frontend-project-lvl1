#!/usr/bin/env node

import { greeting, steps } from '../src/index.js';
import { biggestDivisorLogic } from '../src/games.js';

greeting();
console.log('Find the greatest common divisor of given numbers');

steps(biggestDivisorLogic);
