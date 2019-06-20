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

// // Create Game
// router.post('/', (req, res) => {
//   const newGame = {
//     id: uuid.v4(),
//     name: req.body.name,
//     email: req.body.email,
//     status: 'active'
//   };

//   if (!newGame.name || !newGame.email) {
//     return res.status(400).json({ msg: 'Please include a name and email' });
//   }

//   games.push(newGame);
//   res.json(games);
//   // res.redirect('/');
// });

// Update Game
router.put('/:id', (req, res) => {
  const found = games.some(game => game.id === parseInt(req.params.id));

  if (found) {
    const updGame = req.body;
    games.forEach(game => {
      if (game.id === parseInt(req.params.id)) {
        game.star = updGame.star ? updGame.star : game.star;

        res.json({ msg: 'Game rated!', game });
      }
    });
  } else {
    res.status(400).json({ msg: `No game with the id of ${req.params.id}` });
  }
});

// // Delete Game
// router.delete('/:id', (req, res) => {
//   const found = games.some(game => game.id === parseInt(req.params.id));

//   if (found) {
//     res.json({
//       msg: 'Game deleted',
//       games: games.filter(game => game.id !== parseInt(req.params.id))
//     });
//   } else {
//     res.status(400).json({ msg: `No game with the id of ${req.params.id}` });
//   }
// });

module.exports = router;
