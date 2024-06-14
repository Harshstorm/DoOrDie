import ConvoModel from "../Models/Conversation.js";

export const setConvo = async(req, res)=>{
    try{
        const senderId = req.body.senderId
        const receiverId = req.body.receiverId
        let exists = await ConvoModel.findOne({members: {$all:[senderId, receiverId]}})
        if(exists){
            res.json(exists)
        }else{
            const newConvo = new ConvoModel({
                members: [senderId, receiverId]
            })

            await newConvo.save(); 
            // Find the conversation again after saving it
           const exists = await ConvoModel.findOne({ members: { $all: [senderId, receiverId] } });
            res.json(exists); 
        }
    }catch(error){
        console.log(error.message)
    }

}