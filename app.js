const express = require('express');
const mongoose = require('mongoose');

const pageRoute = require('./routes/pageRoutes');
const courseRoute = require('./routes/courseRoutes');
const categoryRoute = require('./routes/categoryRoutes');
const userRoute = require('./routes/userRoutes');

const app = express();

//Connect DB
mongoose.connect('mongodb://localhost/smartedu-db').then(() => {
  console.log('DB connect Successfuly');
});

//Template Engine
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middlewares
app.use(express.static('public'));

//Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);

const port = 3000; //
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
