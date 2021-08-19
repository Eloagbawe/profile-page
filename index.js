const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');
const router = express.Router();


const port = 3000;


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

app.use('/', router);
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({
    extended: true
  }))


console.log("Elo Agbawe Idiodi");

app.post('/submit-message', (req, res) => {
    // const name = req.body.name;
    // const email = req.body.email;
    // const subject = req.body.subject;
    // const message = req.body.message;
    console.log(req.body);
    res.send(req.body);
    

    //...
    res.end()
  })
