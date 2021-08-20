require('dotenv').config()
const express = require('express');
const app = express();

const cors = require('cors');
const path = require('path');
const Contact = require('./models/contact');
const connectDB = require("./db");

connectDB();

app.use(express.urlencoded({
    extended: true
  }))
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.post('/submit-message', async function (req, res) {
    const { name, email, subject,  message} = req.body;
    if (!email || !name || !subject || !message) res.status(400).send('All fields are required')
    const newContact = await Contact.create({
        name,
        email,
        subject,
        message
    })
    if (newContact) {
      console.log("contact message created")
      return res.status(201).send(newContact)
    }
    console.log("error")
    return res.status(400).send('something went wrong')
  })

app.listen(3000);



// const express = require("express");
// const app = express();
// const fs = require('fs');
// const path = require('path');
// const router = express.Router();


// const port = 3000;


// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`)
// })

// app.use('/', router);
// app.use(express.static(__dirname + '/public'));

// app.use(express.urlencoded({
//     extended: true
//   }))


// console.log("Elo Agbawe Idiodi");

// app.post('/submit-message', (req, res) => {
//     // const name = req.body.name;
//     // const email = req.body.email;
//     // const subject = req.body.subject;
//     // const message = req.body.message;
//     console.log(req.body);
//     res.send(req.body);
    

//     //...
//     res.end()
//   })
