const {Flights} = require("../models/index");

class AirplaneRepository{

    async createFlight(data){
        try{
            const flight = await Flights.create(data);
            return flight;
        }catch(error){
            console.log("Something went wrong on the repository layer..");
            throw {error}
        }
    }


}

module.exports = AirplaneRepository;