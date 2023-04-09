import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
const schema = new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    date:{
        type:Date, 
        default:new Date()
    },
    state:{
        type:String,
        required:true
    }
},{
    versionKey:false
})

schema.plugin(mongoosePaginate)
const ordersModel = mongoose.model("orders",schema);

export default ordersModel;