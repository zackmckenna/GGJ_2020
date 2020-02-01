const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');

const airtableRouter = require('./src/services/airtable')

app.use(cors());
app.use(bodyParser.json());

app.use(cors());
app.use(express.static('build'));

app.use('/api/airtable', airtableRouter);

const port = 3001
app.listen(port)

console.log(`app is listening on port ${port}`)
