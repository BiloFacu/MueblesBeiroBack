import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    cbu:{
        type:Number,
        required:true
    },
    alias:{
        type:String,
        required:true
    }
},{
    versionKey:false
})

schema.plugin(mongoosePaginate)
const ordersModel = mongoose.model("cbu",schema);

export default ordersModel;