import mongoose, { Schema } from "mongoose";

const UsersSchema = new Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    email:{
        type: String
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

const UsersModel = new mongoose.model('All_Users', UsersSchema)

export default UsersModel;