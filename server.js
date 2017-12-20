const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Jose',
    likes: [
      'baskqetball',
      'swimming',
      'tv shows'
    ]
  })
});

app.get('/about', (req, res) => {
  res.send('About page...')
});

app.get('/bad', (req, res) => {
  res.send({
    error: 404,
    description: 'Page not found'
  });
});

app.listen(3000);
