import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
const schema = new mongoose.Schema({
    Sector:{
        type:String, 
        required:true
    }, // String is shorthand for {type: String}
    PalabraClave:{
        type:String, 
        required:true
    },
    Titulo:{
        type:String, 
        required:true
    },
    Metadescripcion:{
        type:String,
        required:true 
    },
    /* isDeleted:{
        type:Boolean,
        default:false
    }, */
    createdAt:{type:Date, default:new Date()},
    updatedAt:{type:Date},
    deletedAt:{type:Date, default:null},
},{
    versionKey:false
});



schema.plugin(mongoosePaginate)
const productModel = mongoose.model("article",schema);

export default productModel;