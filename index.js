const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const documento = require('./routes/documento');
const token = require('./routes/token');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();
const router = express.Router();

app.use(bodyParser.json());

app.use(jwt({ secret: process.env.SECRET }).unless({ path: ['/token'] }));

app.use('/token', token(router));
app.use('/documento', documento(router));

app.get('/', (req, res) => {
    res.send('hello world!!!!');
});

app.listen(8080, () => {
    console.log('Ouvindo na porta 8080');
});
