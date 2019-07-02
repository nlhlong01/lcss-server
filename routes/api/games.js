const express = require('express');
const Pool = require('pg').Pool;

const router = express.Router();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432,
})

// Gets all games
router.get('/', (request, response) => {
    // res.json(games);

    pool.query('SELECT * FROM games ORDER BY id ASC', (error, result) => {
        if (error) {
            console.log(error.stack);
        } else {
            console.log(result.rows)
            response.json(result.rows);
        }
    })
});

// Get a single game
router.get('/:id', (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(`SELECT * FROM games WHERE id = ${id}`, (error, result) => {
        if (error) {
            console.log(error.stack);
        } else {
            console.log(result.rows)
            response.json(result.rows);
        }
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
router.put('/:id', (request, response) => {
    // if (req.body.comment) {
    //     const newCmt =  req.body.comment;
    //     games[req.params.id - 1].comment.push(newCmt);
    //     res.json({ comment: newCmt });
    // }
    // else {
    //     const newRating =  req.body.rating;
    //     games[req.params.id - 1].rating = newRating;
    //     res.json({ rating: newRating });
    // }
    
    const id = request.body.id;

    if (request.body.comment) {
        const newCmt =  request.body.comment;
        pool.query(`UPDATE games SET comment = array_append(comment, '${newCmt}') WHERE id = ${id}`, (error, result) => {
            if (error) {
                console.log(error.stack);
            } else {
                console.log(result.rows)
                response.json({
                    id: id,
                    comment: newCmt
                });
            }
        })
    } else {
        const newRating =  request.body.rating;
        pool.query(`UPDATE games SET rate = ${newRating} WHERE id = ${id}`, (error, result) => {
            if (error) {
                console.log(error.stack);
            } else {
                console.log(result.rows)
                response.json(result.rows);
            }
        })
    } 
});

module.exports = router;
