const express = require('express');
const games = require('../../games');
const bodyParser = require('body-parser');

const router = express.Router();

// Gets all games
router.get('/', (req, res) => {
    res.json(games);
});

// Get a single game
router.get('/:id', (req, res) => {
    // Check if there exists a game with such id
    const found = games.some(game => game.id === parseInt(req.params.id));

    if (found) {
        res.json(games.filter(game => game.id === parseInt(req.params.id))[0]);
    } else {
        res.status(400).json({ msg: `No game with name ${req.params.id}` });
    }
});

// // Rate
// router.put('/:id', (req, res) => {
//     const found = games.some(game => game.id === parseInt(req.params.id));
  
//     if (found) {
//       const updGame = req.body;
//       games.forEach(game => {
//         if (game.id === parseInt(req.params.id)) {
//           game.rating = updGame.rating ? updGame.rating : game.rating;
//           res.json({ msg: 'Game updated', game });
//         }
//       });
//     } else {
//       res.status(400).json({ msg: `No game with the id of ${req.params.id}` });
//     }
// });

module.exports = router;
