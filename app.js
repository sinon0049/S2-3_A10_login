const express = require('express')
const exphb = require('express-handlebars')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
require('./config/mongoose')

app.engine('hbs', exphb({ default: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(port, (req, res) => {
    console.log(`Login system is listening on http://localhost:${port}`)
})