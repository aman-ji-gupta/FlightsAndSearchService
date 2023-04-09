const {City} = require("../models/index");
const { Op } = require("sequelize");

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
            //The below approach also work but will not return updated object
            //if we are using postgre then returning: true can be used, else not
            // const city = await City.update(data,{
            //     where : {
            //         id : cityID
            //     }
            // })

            //for getting the updated data in mysql we use the below approach
            const city = await City.findByPk(cityID);
            city.name = data.name;
            await city.save();
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

    async getAllCity(filter){
        try{
            console.log(filter.name);
            if(filter.name){
                const city = await City.findAll({
                    where : {
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return city;
            }
            const cities = await City.findAll();
            return cities;
        }catch(error){
            throw {error}
        }
    }

}

module.exports = CityRepository;
