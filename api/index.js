'use strict'

const express = require('express')
const bodyParser = require("body-parser")
const routes = require('../api/routes/directory')
const expressJSDocSwagger = require("express-jsdoc-swagger")


const app = express()

const PORT = 3000

app.use('/', routes)
app.use(bodyParser.urlencoded({ extended: false }))
app.listen(process.env.PORT, () => console.log(`App listening at http:/localhost:${PORT}`))
