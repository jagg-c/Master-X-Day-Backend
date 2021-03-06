const PostgresLib = require('../database/postgresql');

class FlightService {
  constructor(){
    this.collection = 'flight';
  }

  async getFlight ({ flightId }){
    const flight = await this.PostgresLib.get(this.collection, flightId);
    return flight || [];
  }

  async getFlights ({}){
    const flights = await this.PostgresLib.getAll(this.collection);
    return flights || [];
  }

  async createFlight ({ flight }){
    const createdFlightId = await this.PostgresLib.insert(this.collection, flight);
    return createdFlightId;
  }

  async updateFlight ({ flightId,  flight }){
    const createdFlightId = await this.PostgresLib.update(this.collection, flightId, flight);
    return createdFlightId;
  }

  async deleteFlight({ flightId }){
    const deletedFlightId = await this.PostgresLib.delete(this.collection, flightId);
    return deletedFlightId;
  }
}

module.exports = FlightService;
