const { getFlights, getFlightsCounts, createFlight, updateFlight, deleteFlight} = require('../database/postgresql');

class FlightService {
  constructor(){
    this.collection = 'flight';
  }

  async getFlights (){
    const flights = await getFlights();
    return flights || [];
  }

  async getFlightsCount (){
    const flights = await getFlightsCounts();
    return flights || [];
  }

  async createFlight ({ flight }){
    console.log(flight);
    const createdFlightId = await createFlight(flight);
    return createdFlightId;
  }

  async updateFlight ({ flightId,  flight }){
    flight.flightid = flightId;
    const updatedFlightId = await updateFlight(flight);
    return updatedFlightId;
  }

  async deleteFlight({ flightId }){
    const flight = { flightid: flightId}
    const deletedFlightId = await deleteFlight( flight );
    return deletedFlightId;
  }
}

module.exports = FlightService;
