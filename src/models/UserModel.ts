import mongoose,{Schema} from "mongoose";

const UserScheme = new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    rule:{
        type:Number,
        default:1,
    },
    createdAt:{
        type:String,
        default:Date.now(),
    },
    updatedAt:{
        type:String,
        default:Date.now(),
    },
});

const UserModel=mongoose.model('users',UserScheme)
export default UserModel;