#!/usr/bin/env node

import { greeting, steps } from '../src/index.js';
import { progressLogic } from '../src/games.js';

greeting();
console.log('What number is missing in the progression?');

steps(progressLogic);
