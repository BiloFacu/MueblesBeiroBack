import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
const schema = new mongoose.Schema({ 
    firstName:{
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    address:{
        type: String,
    },
    city:{
        type: String,
    },
    country:{
        type: String,
    },
    zipCode:{
        type: String,
    },
    creditCard:{
        type: String,
    },
    admin:{
        type:Boolean,
        default:false
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