import mongoose, { Schema } from "mongoose"

const ConvoSchema = new Schema({
    members:{
        type: Array
    },
    message:{
        type: String
    }
}, {
    timestamps: true
})
const ConvoModel = new mongoose.model('Conversations', ConvoSchema)

export default ConvoModel;