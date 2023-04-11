const crudService = require("../services/crud-service");
const {AirportRepository} = require("../repository/index");

class AirportService extends crudService{
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }


}

module.exports = AirportService;
