const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoutes');
const courseRoute = require('./routes/courseRoutes');

const app = express();

//Connect DB
mongoose.connect('mongoose://localhost/smartedu-db').then(() => {
  console.log('DB connect Successfuly');
});

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

//Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);

const port = 3000; //
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
