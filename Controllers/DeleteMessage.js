import MessagesModel from "../Models/Messages.js";


export const deleteMessage = async(req, res) =>{
    try{
        await MessagesModel.deleteOne({_id: req.body.id})
        res.json('Deleted Successfully')
    }catch(error){
        console.log(error.message)
    }
}