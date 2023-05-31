const express = require('express')
const handlebars = require('express-handlebars');
const path = require('path')

const app = express();

const PORT = 5000
//EXPRESS CONFIG
app.use(express.static(path.resolve(__dirname, 'public')))
//app.use(express.static(path.resolve(__dirname, '../public')))
//app.use(express.static(path.resolve(__dirname, '../public'))); // to be able to use static files from public Need to setup Path module



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