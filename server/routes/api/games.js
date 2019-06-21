const express = require('express');
const router = express.Router();
const games = require('../../games');

// Gets all games
router.get('/', (req, res) => res.json(games));

// Get a single game
router.get('/:id', (req, res) => {
    // Check if there exists a game with such id
    const found = games.some(game => game.id === parseInt(req.params.id));

    if (found) {
        res.json(games.filter(game => game.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No game with name ${req.params.id}` });
    }
});

module.exports = router;
