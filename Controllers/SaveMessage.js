import MessagesModel from "../Models/Messages.js";

export const saveMessage = async(req, res) => {
    try{
        
        let data = new MessagesModel(req.body);
        await data.save(); // Ensure the save operation completes
        res.json(data);
        
    }catch(error){
        console.log(error.message)
    }
}