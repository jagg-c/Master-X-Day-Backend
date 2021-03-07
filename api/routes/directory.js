'use strict'

const express = require('express')
const FlightService = require('../services/flight');

const router = express.Router()

const flightService = new FlightService();

router.route('/flight/')
    /**
    * GET /flight
    * @summary check flights
    * @tags Flights
    * @return { object } 200 - File saved
    * @return { object } 400 - Bad request response
    */
    .get(
        async function(req, res, next){
            console.log('Files')
            try{
                const flights = await flightService.getFlights();
                res.status(200).json({
                    data: flights,
                    message: 'flights listed',
                });
            }catch (err){
                console.log(err);
            }
        })
    /**
    * Flight
    * @typedef { object } Flight
    * @property { string } routeid
    * @property { string } updated 
    * @property { string } exitdate
    * @property { string } timeboarding
    */

    /**
    * POST /flight
    * @summary Create flights
    * @tags Flights
    * @param { Flight } request.body.required
    * @return { object } 200 - success response - application/json
    * @return { object } 400 - Bad request response
    */
    .post(
        async function(req, res, next){
            const { body: flight } = req;
            try{
                const createdFlightId = await flightService.createFlight(flight);
                res.status(200).json({
                    data: flight,
                    message: 'flight created',
                });
            }catch (err){
                console.log(err);
            }
        })

router.route('/flight/:flightId')
    /**
    * PUT /flight
    * @summary check flights
    * @tags Flights
    * @param {string} flightId.path
    * @param { Flight } request.body.required
    * @return { object } 200 - File saved
    * @return { object } 400 - Bad request response
    */
    .put(
        async function(req, res, next){
            const { body: flight } = req;
            const { flightId } = req.params;

            try {
                const updatedFlightId = await flightService.updateFlight({
                    flightId,
                    flight,
                });
                res.status(200).json({
                    data: updatedFlightId,
                    message: 'flight updated',
                });
            } catch (err) {
                console.log(err);
            }
        })
    /**
    * DELETE /flight
    * @summary check flights
    * @tags Flights
    * @param {string} flightId.path
    * @return { object } 200 - File saved
    * @return { object } 400 - Bad request response
    */
    .delete(
        async function(req, res, next){
            const { flightId } = req.params;
            try {
                const deletedFlightId = await flightService.deleteFlight({flightId});
                res.status(200).json({
                    data: deletedFlightId,
                    message: 'flight deleted',
                });
            } catch (err) {
                console.log(err);
            }
        })



module.exports = router