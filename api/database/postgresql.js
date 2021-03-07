const env = require('./config/env.js')
const { Client} = require('pg')

const connectionData = {
  user: env.USER,
  host: env.HOST,
  database: env.DATABASE,
  password: env.PASSWORD,
  port: env.PORT,
}

const client = new Client(connectionData)
client.connect()

async function sendQuery(query){
    const result = client.query(query)
    .then(response => {
        console.log(response.rows)
        return response.rows
    })
    .catch(err => {
        console.error(err)
        return false
    })
    return result
}

async function execute(query){
    const result = client.query(query)
    .then(response => {
        console.log(response.rows)
        return true
    })
    .catch(err => {
        console.error(err)
        return false
    })
    return result
}

const getFlights = async function getRegister(){
    query = `
    SELECT * FROM public.flight;
    `
    const result = await sendQuery(query)
    return result == false ? 500 : result
}

const getFlightsCounts = async function getCount(){
    query = `
    SELECT COUNT(*) FROM public.flight;
    `
    const result = await sendQuery(query)
    return result == false ? 500 : result
}

const createFlight = async function createRegister(flight){
    query = `
    INSERT INTO public.flight(
                routeid,
                status,
                arrivaldate,
                exitdate,
                timeboarding
                )
         VALUES (
                '${flight.routeid}',
                '${flight.status}' ,
                '${flight.arrivaldate}' ,
                '${flight.exitdate}' ,
                '${flight.timeboarding}' 
                );
    `

    const result = await execute(query)
    console.log(result)
    return result == false ? 500 : result
}

const updateFlight = async function updateRegister(flight){
    query = `
    UPDATE public.flight
       SET routeid = '${flight.routeid}',
           status = '${flight.status}',
           arrivaldate = '${flight.arrivaldate}',
           exitdate = '${flight.exitdate}',
           timeboarding = '${flight.timeboarding}' 
     WHERE flightid = ${flight.flightid}
    `
    const result = await execute(query)
    return result == false ? 500 : 200
}

const deleteFlight = async function deleteRegister(flight){
    query = `
    DELETE FROM public.flight WHERE flightid = ${flight.flightid}
    `
    const result = await execute(query)
    return result == false ? 500 : 200
}


module.exports = { getFlights, getFlightsCounts, createFlight, updateFlight, deleteFlight}
