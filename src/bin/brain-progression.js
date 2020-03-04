#!/usr/bin/env node

import gameEngine from '../index.js';
import getGameData from '../games/progression-game.js';

const gameData = getGameData();
gameEngine(gameData);
