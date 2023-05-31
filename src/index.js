const express = require('express')
//const handlebars = require('express-handlebars');
//const path = require('path')

//EXPRESS CONFIG
const expressConfig = require('./config/expressConfig');
//handlebars config
const handlebarsConfig = require('./config/handlebarsConfig')
//router
const homeController = require('./controllers/homeController')
//addCat
const catController = require('./controllers/catController')

const app = express();

const PORT = 5000
//EXPRESS CONFIG
expressConfig(app)
//handlebars config
handlebarsConfig(app)
//router
app.use(homeController)
app.use('/cats', catController)



app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))