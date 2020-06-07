const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Animal = new Schema ({
    name: {
        type: String,
        required: true
    },
    kind: {
        type:String,
        required:true
    },
    age: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

Animal.statics.findByKindOfAnimal = function (kind){
    return this.find({kind:kind}) //kind:"Dog" also could be used. the second kind is the parameter kind
}

//to have another query
Animal.statics.findByName = function (name){
    return this.find({name:name}) 
}


module.exports = mongoose.model("Animal", Animal)   // the const on line 4