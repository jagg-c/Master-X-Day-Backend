'use strict'

const bodyParser = require('body-parser')
const express = require('express')
const expressJSDocSwagger = require('express-jsdoc-swagger')

const routes = require('./routes/directory')

const { options } = require('./config/swagger');

const app = express()
expressJSDocSwagger(app)(options)

const PORT = 3000

app.use('/', routes)
app.use(bodyParser.urlencoded({ extended: false }))
app.listen(PORT, () => console.log(`App listening at http:/localhost:${PORT}`))
