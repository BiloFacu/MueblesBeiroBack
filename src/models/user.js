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
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    zipCode:{
        type: String,
        required: true
    },
    creditCard:{
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
const userModel = mongoose.model("user",schema);

export default userModel;