const {CityRepository} = require("../repository/index");

class CityService {
    constructor(){
        //we can make this class same as city-repository code..but ye constructor ke through bhi aana chahiye thats isme constructor se bnaya
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
            return city;
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

    async getAllCity(){
        try{
            const city = await this.cityRepository.getAllCity();
            return city;
        }catch(error){
            console.log("something went wrong at the service layer");
            throw {error}
        }
    }
}

module.exports = CityService;