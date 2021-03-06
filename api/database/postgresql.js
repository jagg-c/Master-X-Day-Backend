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
        client.end()
        return response.rows
    })
    .catch(err => {
        client.end()
        console.error(err)
        return false
    })
    return result
}

const getFlight = async function getRegisters(){
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

    const result = await sendQuery(query)
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
    const result = await sendQuery(query)
    return result == false ? 500 : 200
}

const deleteFlight = async function deleteRegister(flight){
    query = `
    DELETE FROM public.flight WHERE flightid = ${flight.flightid}
    `
    const result = await sendQuery(query)
    return result == true ? 500 : 200
}

console.log(getFlight());

module.exports = { getFlight, createFlight, updateFlight, deleteFlight}
