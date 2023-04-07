const {CityRepository} = require("../repository/index");

class cityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data);
            return city;
        }catch(error){
            console.log("something went wrong at the service layer");
            throw {error}
        }
    }

    async deleteCity(cityID){
        try{
            const city = await this.cityRepository.deleteCity(cityID);
            return true;
        }catch(error){
            console.log("something went wrong at the service layer");
            throw {error}
        }
    }

    async updateCity(cityID,data){
        try{
            const city = await this.cityRepository.updateCity(cityID,data);
            return city;
        }catch(error){
            console.log("something went wrong at the service layer");
            throw {error}
        }
    }

    async getCity(cityID){
        try{
            const city = await this.cityRepository.getCity(cityID);
            return city; 
        }catch(error){
            console.log("something went wrong at the service layer");
            throw {error}
        }
    }
}

module.exports = cityService;