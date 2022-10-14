const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const path = require('path');
require('dotenv').config();

const morgan = require('morgan')

const route = require('./routes')

//Init database
const database = require('./config/database/index')
database.connect();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//morgan
app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')));

//ROUTES init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})