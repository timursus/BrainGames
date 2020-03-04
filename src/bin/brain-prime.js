#!/usr/bin/env node

import gameEngine from '../index.js';
import getGameData from '../games/prime-game.js';

const gameData = getGameData();
gameEngine(gameData);
