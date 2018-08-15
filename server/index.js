const express       = require('express'),
      bodyParser    = require('body-parser'),
      app           = express(),
      port          = 3000,
      bC            = require('./controllers/books_controller');


//Body Parser Config
app.use(bodyParser.json());
app.use( express.static( __dirname + "/../build") );

//GET
app.get('/api/books', bC.read);

//POST
app.post('/api/books', bC.create);

//UPDATE
app.put('/api/books/:id', bC.update);

//DELETE
app.delete('/api/books/:id', bC.delete)
//Server Start
app.listen(port, () => `Server running on port ${port}`);