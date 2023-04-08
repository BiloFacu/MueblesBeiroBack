import mongoose from "mongoose";
const schema = new mongoose.Schema({
    
    NombreSector:{
        type:String, 
        required:true
    }, // String is shorthand for {type: String}
    createdAt:{type:Date, default:new Date()},
    updatedAt:{type:Date},
    deletedAt:{type:Date, default:null},
},{
    versionKey:false
});


const sectors = mongoose.model("sector",schema);

export default sectors;