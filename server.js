const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up static folder
app.use(express.static(path.join(__dirname, 'public/dist/LCSS')));

// Members API Routes
app.use('/api/games', require('./routes/api/games'));

// Run the server on a port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
