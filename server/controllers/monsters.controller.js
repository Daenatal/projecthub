const model = require('../models/monsters.model');

function getAllMonsters(req, res) {
    res.json(model);
}

function getMonster(req, res) {
    const monsterId = Number(req.params.monsterId);
    const monster = model[monsterId];
    if (monster) {
        res.status(200).json(monster);
    } else {
        res.status(404).json({
            error: "Monster does not exist..."
        });
    }
}

function postMonster(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing name field'
        });
    }
    const newFriend = {
        name: req.body.name,
        id: model.length
    }
    model.push(newFriend);

    res.json(newFriend);
}

module.exports = {
    getAllMonsters,
    getMonster,
    postMonster
}