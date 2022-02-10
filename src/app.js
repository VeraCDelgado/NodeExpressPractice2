const express = require('express');
const morgan = require('morgan');
//settings
const app = express();
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 2);

//middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));


app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
});