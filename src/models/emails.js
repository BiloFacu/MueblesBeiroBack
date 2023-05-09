import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
},{
    versionKey:false
})

schema.plugin(mongoosePaginate)
const ordersModel = mongoose.model("emails",schema);

export default ordersModel;