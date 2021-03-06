const { getFlight, createFlight, updateFlight, deleteFlight} = require('../database/postgresql');

class FlightService {
  constructor(){
    this.collection = 'flight';
  }

  async getFlight ({ flightId }){
    const flight = await getFlight(this.collection, flightId);
    return flight || [];
  }

  async getFlights (){
    const flights = await getFlight(this.collection);
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
