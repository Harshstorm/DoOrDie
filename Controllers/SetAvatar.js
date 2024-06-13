import axios from "axios";
import express from "express";
import UsersModel from "../Models/UsersModel.js";

export const setAvatar = async(req, res) =>{
    try{
        let data = await UsersModel.findOneAndUpdate({userId: req.body.userId}, req.body, {new: true})
        res.json(data)
        
    }catch(error){
        console.log(error.message)
    }
}
