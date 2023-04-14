const express = require('express');

const monstersController = require('../controllers/monsters.controller');

const monsterRouter = express.Router();


monsterRouter.use((req, res, next) => {
    console.log('ip address:', req.ip);
    next();
})
monsterRouter.get('/', monstersController.getAllMonsters);
monsterRouter.get('/:monsterId', monstersController.getMonster);
monsterRouter.post('/', monstersController.postMonster);

module.exports = monsterRouter;