const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes/index');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use('/', routes);
app.use(morgan('dev'));

dotenv.config({ path: path.join(__dirname, '../.env') });
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

module.exports = app;
