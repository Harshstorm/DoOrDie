import MessagesModel from "../Models/Messages.js";

export const saveMessage = async(req, res) => {
    try{
        
        let data = await MessagesModel(req.body)
        data.save()

        res.json(data)
    }catch(error){
        console.log(error.message)
    }
}