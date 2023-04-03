const mongoose = require('mongoose')

let conect = async()=>{
    try {
        console.log("running");
        await mongoose.connect("mongodb://127.0.0.1:27017")
        console.log("conect")
    } catch (error) {
        console.log(error)
    }
}
module.exports = conect