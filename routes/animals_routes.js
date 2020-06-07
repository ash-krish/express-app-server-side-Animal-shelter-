const express = require("express")
const router = express.Router()
const {getAnimals, getAnimal, postAnimal, removeAnimal, changeAnimal } = require("../controllers/animals_controller")

//read
//GET on "/animals"
//Returns all animals 
router.get("/", getAnimals)  //2nd parameter is the callback

//READ
//GET on "/animals/:id"
//returns one animal with specified id
router.get("/:id", getAnimal)

//CREATE
//POST in "/animals"
//Create a new animal
router.post("/", postAnimal)

//DELETE
//DELETE in "/animals/:id"
//Deletes an animal with id
router.delete("/:id", removeAnimal)


//UPDATE
//PUT on "/animals/:id"
//updates animal with specified id
router.put("/:id", changeAnimal)




module.exports = router