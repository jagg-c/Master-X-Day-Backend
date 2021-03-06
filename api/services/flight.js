const { getFlight} = require('../database/postgresql');

class FlightService {
  constructor(){
    this.collection = 'flight';
  }

  async getFlight ({ flightId }){
    const flight = await getFlight(this.collection, flightId);
    return flight || [];
  }

  async getFlights (){
    const flights = await getFlight(this.collection, flightId);
    return flights || [];
  }

  async createFlight ({ flight }){
    const createdFlightId = 1; //await this.PostgresLib.insert(this.collection, flight);
    return createdFlightId;
  }

  async updateFlight ({ flightId,  flight }){
    const updatedFlightId = flightId //;await this.PostgresLib.update(this.collection, flightId, flight);
    return updatedFlightId;
  }

  async deleteFlight({ flightId }){
    const deletedFlightId = flightId; //await this.PostgresLib.delete(this.collection, flightId);
    return deletedFlightId;
  }
}

module.exports = FlightService;
