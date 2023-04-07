const {City} = require("../models/index");

class CityRepository{

    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("Something went wrong on the repository layer..");
            throw {error}
        }
    }

    async updateCity(cityID , data){ //data is passing as a object ex {name : "indore"} 
        try{
            const city = await City.update(data,{
                where : {
                    id : cityID
                }
            })
            return city;
        }catch(error){
            console.log("Something went wrong on the repository layer..");
            throw {error}
        }
    }

    async getCity(cityID){
        try{
            const city = await City.findByPk(cityID);
            return city;
        }catch(error){
            console.log("Something went wrong on the repository layer..");
            throw {error}
        }
    }

    async deleteCity(cityID){
        try{
            await City.destroy({
                where : {
                    id : cityID
                }
            });
            return true;
        }catch(error){
            throw {error}
        }
    }

}

module.exports = CityRepository;
