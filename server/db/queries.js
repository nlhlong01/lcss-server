const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'goodgamedb',
  password: 'password',
  port: 5432,
})
const getGames = (request, response) => {
  pool.query('SELECT name FROM games ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.json(results.rows)
  })
}

const getGameById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM games WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.json(results.rows)
  })
}

const rate = (request, response) => {
  const newrate = request.body
  pool.query('UPDATE games SET rate = $1 WHERE id =1', [newrate], (error, results) => {
    if (error) {
       throw error
    }
    response.status(201).send(`rate updated with ID: ${results, insertID}`)
  })
}

const cmtNo = (request, response) => {
  pool.query('SELECT comment FROM games WHERE id=1', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addComment = (request, response) => {
  const cmt = request.body

  pool.query('UPDATE games SET comment[$1] = $2 WHERE id=1', [cmtNo.length+2,cmt], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`comment added with ID: ${results.insertId}`)
  })
}



module.exports = {
  getGames,
  getGameById,
  addComment,
  rate,
  cmtNo
}
