const Animal = require("../models/animal") //allows access to model schema


const getAllAnimals = function(req){  //if request has a query it will apply the first condition , if not it shows all
    if (req.query.kind){
        return Animal.findByKindOfAnimal(req.query.kind)
    } else if (req.query.name){
        return Animal.findByName(req.query.name)
    } else{
        return Animal.find() 
    }
    
     //returning a query after which the controller will return 
}


const getAnimalById = function (id){
    return Animal.findById(id)

}

const addAnimal = function(body){
    return new Animal(body)
}

const deleteAnimal = function(id){
    return Animal.findByIdAndRemove(id)
}

const updateAnimal = function (req){ 
    return Animal.findByIdAndUpdate(req.params.id, req.body, {  //req.body means client is sending something to server through body
        new : true  
    })
}

module.exports = {getAllAnimals, getAnimalById, addAnimal, deleteAnimal, updateAnimal}