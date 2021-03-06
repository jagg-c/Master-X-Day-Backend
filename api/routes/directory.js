'use strict'

const express = require('express')

const router = express.Router()

router.route('/flight/')
    .get()
    .post()
    .put()
    .delete()



module.exports = router

/**
 * A file csv
 * @typedef {object} File
 * @property {string} file - File CSV - binary
 */

/**
 * POST /flight
 * @summary Upload a csv file
 * @tags Houses
 * @param {File} request.body.required - File info - multipart/form-data
 * @return {object} 200 - File saved
 * @return {object} 400 - Bad request response
 */