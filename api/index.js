'use strict'

const express = require('express')
const bodyParser = require("body-parser")
const routes = require('../api/routes/directory')
const expressJSDocSwagger = require("express-jsdoc-swagger")

const app = express()

const PORT = 3000

app.use(bodyParser.json())

app.use('/', routes)


app.listen(PORT, () => console.log(`App listening at http:/localhost:${PORT}`))
