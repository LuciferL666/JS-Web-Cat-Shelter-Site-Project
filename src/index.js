const express = require('express')
//const handlebars = require('express-handlebars');
//const path = require('path')

//EXPRESS CONFIG
const expressConfig = require('./config/expressConfig');
//handlebars config
const handlebarsConfig = require('./config/handlebarsConfig')

const app = express();

const PORT = 5000
//EXPRESS CONFIG
expressConfig(app)
//handlebars config
handlebarsConfig(app)



 //router
app.get('/', (req, res) =>{
    res.render('index')
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))