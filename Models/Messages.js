import mongoose from "mongoose";

const MessagesSchema = new mongoose.Schema({
    members:{
        type: Array
    },
    message:{
        type: String
    },
    conversationId:{
        type: String
    }
}, { timestamps: true })

 const MessagesModel = new mongoose.model('Messages', MessagesSchema)

 export default MessagesModel