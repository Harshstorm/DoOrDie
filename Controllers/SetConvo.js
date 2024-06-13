import ConvoModel from "../Models/Conversation.js";

export const setConvo = async(req, res)=>{
    try{
        const senderId = req.body.senderId
        const receiverId = req.body.receiverId
        let exists = await ConvoModel.findOne({members: {$all:[senderId, receiverId]}})
        if(exists){
            res.json('Already exists')
        }else{
            const newConvo = new ConvoModel({
                members: [senderId, receiverId]
            })
            newConvo.save()
        }
    }catch(error){
        console.log(error.message)
    }

}