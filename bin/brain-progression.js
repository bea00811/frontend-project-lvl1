#!/usr/bin/env node

import { greeting, greeting2, steps } from '../src/index.js';
import { progressLogic } from '../src/games.js';

greeting();
greeting2();
console.log('What number is missing in the progression?');

steps(progressLogic);
