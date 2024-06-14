import mongoose, { Schema } from "mongoose";

const UsersSchema = new Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    email:{
        type: String, required: true, unique: true 
    },
    password:{
        type: String
    },
    userId:{
        type: Number
    },
    avatar:{
        type: String
    }
})

UsersSchema.index({ email: 1 });

const UsersModel = new mongoose.model('All_Users', UsersSchema)

export default UsersModel;