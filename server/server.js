const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const apiRouter = require('./routes/api');
// const bodyParser = require('body-parser');

// app.use(express.bodyParser());

// const apiRouter = express.Router();
console.log('in the server');

// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '../build'));



app.use('/api', apiRouter);
// connect to mongoose
mongoose
  .connect('mongodb+srv://linda:QsKIMOxlQ6AsCuNm@cluster0.yhohdys.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(con => {
    console.log('connected to db')
  });


// app.get('/*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../build/index.html'))
// });

// app.use('/', require('./routes/api.js'));

// app.get('/community',
//   (req, res) => {
//     res.sendFile(path.resolve(__dirname, './src/components/community.jsx'));
//   });

app.use((req, res) => res.status(404).send('Unknown route handler error caught.'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('express server is running on port 3000')
})

module.exports = app;