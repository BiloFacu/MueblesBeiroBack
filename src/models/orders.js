import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
const schema = new mongoose.Schema({
    _id:false,
    id:{
        type:Number,
        unique:true
    },
    user_id:{
        type:Number,
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