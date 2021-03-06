'use strict'

const express = require('express')
const FlightService = require('../services/flight');

const router = express.Router()

const flightService = new FlightService();

router.route('/flight/:flightId')
    .get(
        async function(req, res, next){
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

