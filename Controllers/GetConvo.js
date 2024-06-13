import ConvoModel from "../Models/Conversation.js";

export const getConvo = async(req, res)=>{
    try{
        const senderId = req.body.senderId
        const receiverId = req.body.receiverId
        let exists = await ConvoModel.findOne({members: {$all:[senderId, receiverId]}})
        res.json(exists)
    }catch(error){
        console.log(error.message)
    }

}