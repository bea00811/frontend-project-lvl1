#!/usr/bin/env node

import { greeting, steps } from '../src/index.js';
import { evenLogic } from '../src/games.js';

greeting();

steps(evenLogic);
