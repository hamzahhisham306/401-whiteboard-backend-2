"use strict";


class userComment{
    constructor(model){
        this.model=model;
    }
 
    async create(object){
        try{
          return await this.model.create(object);
        }
        catch(error){
            console.error("ERROR when create");

        }
    }

    async read(id){
        try{
        if(id){
         return await this.model.findOne({where:{id:id}});
        }
        else{
            return await this.model.findAll();
        }
    }
    catch(error){
         console.error("ERORR When read");
        }
    }
    async update(id, object){
        try{
            const dataById = await this.model.findOne({where: {id}});
            return await dataById.update(object);
        }
        catch(ERROR) {
            console.error(`Error while updating data with id: ${id}`);
          }
    }
    async Delete(id){
        try{
            return await this.model.destroy({where:{id:id}});
        }
        catch(error){
            console.error("Error when make delete");
        }
    }
    async readWithPost(post){
        try{
            return await this.model.findAll({include:[post]});
        }
        catch(error){
            console.error('Error when make Read')
        }
    }
}


module.exports=userComment;