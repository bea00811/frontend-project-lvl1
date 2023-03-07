#!/usr/bin/env node

import { greeting, greeting2, steps } from '../src/index.js';
import { evenLogic } from '../src/games.js';

greeting();
greeting2();

steps(evenLogic);
