import ConvoModel from "../Models/Conversation.js";
import MessagesModel from "../Models/Messages.js";

export const setConvo = async(req, res)=>{
    try{
        const senderId = req.body.senderId
        const receiverId = req.body.receiverId
        let exists = await ConvoModel.findOne({members: {$all:[senderId, receiverId]}})
        if(exists){
            await MessagesModel.find({conversationId: exists._id })
            .then(messages=>{
                           res.json({allmessages: messages, convoId: exists._id})
            })
        }else{
            const newConvo = new ConvoModel({
                members: [senderId, receiverId]
            })

            await newConvo.save(); 
            // Find the conversation again after saving it
           const exists = await ConvoModel.findOne({ members: { $all: [senderId, receiverId] } });
           await MessagesModel.find({conversationId: exists._id })
            .then(messages=>{
                           res.json({allmessages: messages, convoId: exists._id})
            })
    }
    }catch(error){
        console.log(error.message)
    }

}