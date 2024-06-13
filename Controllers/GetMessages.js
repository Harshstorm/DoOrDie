import MessagesModel from "../Models/Messages.js";

export const getMessages = async(req, res)=>{
    try{
        let data = await MessagesModel.find({conversationId: req.body.conversationID })
        res.json(data)
    }catch(error){
        console.log(error.message)
    }
}