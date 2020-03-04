#!/usr/bin/env node

import gameEngine from '../index.js';
import getGameData from '../games/gcd-game.js';

const gameData = getGameData();
gameEngine(gameData);
