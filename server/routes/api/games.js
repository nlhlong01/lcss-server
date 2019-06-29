const express = require('express');
const games = require('../../games');
const pgp = require('pg-promise');
const Pool = require('pg').Pool;

const router = express.Router();
// const db = pgp('postgres://username:password@192.168.137.53:5432/goodgame');
const pool = new Pool({
    user: 'username',
    host: '192.168.137.53',
    database: 'goodgame',
    password: 'password',
    port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})
  

// Gets all games
router.get('/', (req, res) => {
    // res.json(games);

    db.any('SELECT * FROM games ORDER BY id ASC')
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        // error;
    });
});

// Get a single game
router.get('/:id', (req, res) => {
    // // Check if there exists a game with such id
    // const found = games.some(game => game.id === parseInt(req.params.id));

    // if (found) {
    //     res.json(games.filter(game => game.id === parseInt(req.params.id))[0]);
    // } else {
    //     res.status(400).json({ msg: `No game with name ${req.params.id}` });
    // }
    const id = parseInt(req.params.id)

    db.any('SELECT name FROM games ORDER BY id ASC')
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        // error;
    });
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

// Post comment
router.put('/:id', (req, res) => {
    if (req.body.comment) {
        const newCmt =  req.body.comment;
        games[req.params.id - 1].comment.push(newCmt);
        res.json({ comment: newCmt });
    }
    else {
        const newRating =  req.body.rating;
        games[req.params.id - 1].rating = newRating;
        res.json({ rating: newRating });
    }
});

module.exports = router;
