const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 5002

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/games', db.getGames)
app.get('/games/:id', db.getGameById)
app.post('/games',db.addComment)
app.get('/games',db.cmtNo)
app.get('/games'.db.rate)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
