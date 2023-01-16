import mongoose, { mongo } from "mongoose"

const schema = mongoose.Schema;

const userSchema = new schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    requires:true,
    minLength:7
},
blogs:[{type:mongoose.Types.ObjectId,ref:"Blog",required:true}]

});

export default mongoose.model('User',userSchema);