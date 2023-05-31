const express = require('express')
const handlebars = require('express-handlebars');
const path = require('path')

//EXPRESS CONFIG
const expressConfig = require('./config/expressConfig');

const app = express();

const PORT = 5000
//EXPRESS CONFIG
expressConfig(app)




//handlebars config
 app.engine('hbs', handlebars.engine({
     extname: 'hbs',
 }))
 app.set('view engine', 'hbs')
 app.set('views', 'src/views')

 //router
app.get('/', (req, res) =>{
    res.render('index')
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))