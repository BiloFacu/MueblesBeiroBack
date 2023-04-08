import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
const schema = new mongoose.Schema({
    _id:false,
    id:{
        type: Number,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    stock:{
        type: String,
        required: true
    },
    date:{
        type:Date, 
        default:new Date()
    }
},{
    versionKey:false
})

schema.plugin(mongoosePaginate)
const productsModel = mongoose.model("products",schema);

export default productsModel;